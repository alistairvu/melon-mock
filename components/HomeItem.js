import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native"
import { useDispatch } from "react-redux"
import { clientID, clientSecret } from "../secrets"
import { Buffer } from "buffer"

const HomeItem = (props) => {
  const { link, title, type } = props
  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const getToken = async () => {
    try {
      const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(
            clientID + ":" + clientSecret
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
      })
      const data = await res.json()
      return data["access_token"]
    } catch (error) {
      console.log(error)
    }
  }

  const getData = async () => {
    const token = await getToken()
    try {
      const res = await fetch(
        `https://api.spotify.com/v1/playlists/${link}/tracks?market=VI&fields=items(track(album(images%2Cname%2Crelease_date)%252Cartists(name)%252Cname%252Cid))&limit=8`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const data = await res.json()
      setData(data.items)
      setLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {loaded ? (
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => {
            const { track } = item
            const { album, artists, name } = track
            return (
              <TouchableOpacity
                style={styles.songContainer}
                onPress={() => {
                  if (type === "songs") {
                    dispatch({
                      type: "NEW_SONG",
                      payload: {
                        artist: artists.map((x) => x.name).join(", "),
                        title: name,
                        image: album.images[0].url,
                        albumName: album.name,
                        releaseDate: album["release_date"],
                        albumId: album.id,
                      },
                    })
                    navigation.navigate("Playing")
                  } else {
                    navigation.navigate("Collection", {
                      artist: artists.map((x) => x.name).join(", "),
                      title: name,
                      image: album.images[0].url,
                    })
                  }
                }}
              >
                <Image
                  source={{ uri: album.images[0].url }}
                  style={styles.image}
                />
                <Text numberOfLines={1} style={styles.songTitle}>
                  {name}
                </Text>
                <Text numberOfLines={1}>
                  {artists.map((x) => x.name).join(", ")}
                </Text>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item) => item.track.id}
        />
      ) : (
        <ActivityIndicator size="large"></ActivityIndicator>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
  },
  title: { fontSize: 30, fontWeight: "700", marginBottom: 15, marginLeft: 10 },
  songContainer: {
    width: 160,
    marginRight: 5,
    marginLeft: 5,
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: "stretch",
    borderRadius: 5,
  },
  songTitle: {
    marginTop: 5,
    fontWeight: "600",
  },
})

export default HomeItem
