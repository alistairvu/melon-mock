import React, { useState } from "react"
import { SafeAreaView, View, Text, StyleSheet } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

const PlayingControls = () => {
  const [liked, setLiked] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.socialContainer}>
        {liked ? (
          <FontAwesome
            name="heart"
            size={24}
            color="white"
            onPress={() => setLiked(false)}
          />
        ) : (
          <FontAwesome
            name="heart-o"
            size={24}
            color="white"
            onPress={() => setLiked(true)}
          />
        )}
        <FontAwesome name="instagram" size={24} color="white" />
      </View>
      <View style={styles.lyricsContainer}>
        <Text style={styles.lyricsTextCurrent}>all my life by my life</Text>
        <Text style={styles.lyricsTextNext}>날아올라 이제</Text>
      </View>
      <View style={styles.controlsContainer}>
        <Text></Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  socialContainer: {
    flex: 1,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lyricsContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  lyricsTextCurrent: {
    color: "rgb(97, 209, 84)",
    fontSize: 20,
    textAlign: "center",
  },
  lyricsTextNext: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  controlsContainer: {
    flex: 4,
  },
})

export default PlayingControls
