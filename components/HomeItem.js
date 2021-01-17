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

const HomeItem = (props) => {
  const { link, title, type } = props
  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const getData = async () => {
    try {
      const res = await axios.get(link)
      const results = await res.data.feed.results
      setData(results)
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
            const { artworkUrl100, name, artistName, releaseDate } = item
            return (
              <TouchableOpacity
                style={styles.songContainer}
                onPress={() => {
                  if (type === "songs") {
                    dispatch({
                      type: "NEW_SONG",
                      payload: {
                        artist: artistName,
                        title: name,
                        image: artworkUrl100,
                      },
                    })
                    navigation.navigate("Playing")
                  } else {
                    navigation.navigate("Collection", {
                      artist: artistName,
                      title: name,
                      image: artworkUrl100,
                      releaseDate: releaseDate,
                    })
                  }
                }}
              >
                <Image source={{ uri: artworkUrl100 }} style={styles.image} />
                <Text numberOfLines={1} style={styles.songTitle}>
                  {name}
                </Text>
                <Text numberOfLines={1}>{artistName}</Text>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item) => item.id}
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
