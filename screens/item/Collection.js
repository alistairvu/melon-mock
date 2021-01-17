import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation, useRoute } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import AlbumItem from "../../components/AlbumItem"
import axios from "axios"

const Collection = () => {
  const route = useRoute()
  const { artist, title, image, releaseDate } = route.params
  const navigation = useNavigation()
  const releaseDateDisplay = releaseDate.split("-").reverse().join("/")

  const [loaded, setLoaded] = useState(false)
  const [trackList, setTrackList] = useState([])

  const getTracks = async () => {
    try {
      const link = `https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?a=${
        title === "folklore (deluxe edition)" ? "folklore" : title
      }&s=${artist}`
      const albumRes = await axios.get(link)
      const albumId = await albumRes.data.album[0].idAlbum
      const trackRes = await axios.get(
        `https://theaudiodb.com/api/v1/json/1/track.php?m=${albumId}`
      )
      const trackData = await trackRes.data.track.map((x) => ({
        artist: x.strArtist,
        title: x.strTrack,
        id: x.idTrack,
      }))
      setTrackList(trackData)
      setLoaded(true)
    } catch (err) {
      console.log(err)
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
                    {title}
                  </Text>
                  <Text style={styles.artist} numberOfLines={1}>
                    {artist}
                  </Text>
                  <Text style={styles.releaseDate} numberOfLines={1}>
                    {releaseDateDisplay}
                  </Text>
                </View>
              </View>
            </SafeAreaView>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.trackList}>
        <FlatList
          data={trackList}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            console.log(item)
            return (
              <AlbumItem
                title={item.title}
                image={image}
                index={index + 1}
                artist={item.artist}
              />
            )
          }}
        />
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
    marginHorizontal: 20,
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
