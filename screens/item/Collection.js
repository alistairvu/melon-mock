import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
  ActivityIndicator,
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation, useRoute } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import AlbumItem from "../../components/AlbumItem"
import { getToken } from "../../utils"

const Collection = () => {
  const route = useRoute()
  const { artist, albumName, image, releaseDate, albumId } = route.params
  const navigation = useNavigation()
  const releaseDateDisplay = releaseDate.split("-").reverse().join("/")

  const [loaded, setLoaded] = useState(false)
  const [trackList, setTrackList] = useState([])

  const getTracks = async () => {
    const token = await getToken()
    try {
      const res = await fetch(
        `https://api.spotify.com/v1/albums/${albumId}/tracks?market=VI`,
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
      const trackData = data.items.map((item) => ({
        artist: item.artists.map((x) => x.name).join(", "),
        title: item.name,
        id: item.id,
      }))
      setTrackList(trackData)
      setLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTracks()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <View style={styles.info}>
        <ImageBackground
          source={{ uri: image }}
          style={styles.background}
          blurRadius={40}
        >
          <View style={styles.infoContentContainer}>
            <SafeAreaView style={styles.infoContent}>
              <View style={styles.nav}>
                <MaterialIcons
                  name="arrow-back-ios"
                  size={24}
                  color="white"
                  onPress={() => navigation.goBack()}
                />
              </View>
              <View style={styles.content}>
                <Image source={{ uri: image }} style={styles.coverArt} />
                <View style={styles.textContent}>
                  <Text style={styles.title} numberOfLines={1}>
                    {albumName}
                  </Text>
                  <Text style={styles.artist} numberOfLines={1}>
                    {artist.split(",")[0]}
                  </Text>
                  <Text style={styles.releaseDate} numberOfLines={1}>
                    {releaseDateDisplay}
                    {loaded &&
                      ` • ${trackList.length} ${
                        trackList.length === 1 ? "track" : "tracks"
                      }`}
                  </Text>
                </View>
              </View>
            </SafeAreaView>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.trackList}>
        {loaded ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={trackList}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <AlbumItem
                  title={item.title}
                  image={image}
                  index={index + 1}
                  artist={item.artist}
                  albumId={albumId}
                  releaseDate={releaseDate}
                  albumName={albumName}
                />
              )
            }}
          />
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <ActivityIndicator size="large"></ActivityIndicator>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  info: {
    flex: 1,
  },
  trackList: {
    flex: 2,
    marginBottom: 30,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  infoContentContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.7)",
  },
  infoContent: {
    flex: 1,
    marginLeft: 20,
  },
  nav: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    flex: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  coverArt: {
    height: 100,
    width: 100,
    resizeMode: "stretch",
  },
  textContent: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "500",
    marginVertical: 2,
  },
  artist: {
    color: "#babbbd",
    fontSize: 20,
    fontWeight: "400",
    marginVertical: 2,
  },
  releaseDate: {
    color: "#babbbd",
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 2,
  },
})

export default Collection
