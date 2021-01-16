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

const Playing = () => {
  const imageSource =
    "https://ww.namu.la/s/1b065ed63fbc45bab1b540b0b69e0510396d73db2d99b2c8f55da237904b77cb5484441a5692ee07acd61385398ac8272db31a2ff8306828051fdffe1b9c92420ef7e01ca5b8ddd237bad7456080ce7622e565d770117f0ffd3789d5cc887ebc42b7c6d54d4fcc2c781850d109143947"

  return (
    <ImageBackground
      source={{
        uri: imageSource,
      }}
      style={styles.background}
      blurRadius={40}
    >
      <StatusBar style="light" />
      <View style={styles.container}>
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.topInfo}>
            <PlayingInfo artist="이달의 소녀" title="new (이브)" />
          </View>
          <View style={styles.coverContainer}>
            <Image source={{ uri: imageSource }} style={styles.coverArt} />
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
