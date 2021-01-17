import React from "react"
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Image,
} from "react-native"
import { StatusBar } from "expo-status-bar"
import PlayingInfo from "../../components/PlayingInfo"
import PlayingControls from "../../components/PlayingControls"
import { useSelector } from "react-redux"

const Playing = () => {
  const song = useSelector((state) => state.song)
  const { artist, title, image } = song

  return (
    <ImageBackground
      source={{
        uri: image,
      }}
      style={styles.background}
      blurRadius={40}
    >
      <StatusBar style="light" />
      <View style={styles.container}>
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.topInfo}>
            <PlayingInfo artist={artist} title={title} />
          </View>
          <View style={styles.coverContainer}>
            <Image source={{ uri: image }} style={styles.coverArt} />
          </View>
          <View style={styles.controls}>
            <PlayingControls />
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.7)",
  },
  safeContainer: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 20,
  },
  topInfo: {
    flex: 1,
    flexDirection: "row",
  },
  coverContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  coverArt: {
    width: 350,
    height: 350,
    resizeMode: "stretch",
  },
  controls: {
    flex: 4,
  },
})

export default Playing
