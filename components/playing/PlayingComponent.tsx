import { useNavigation } from "@react-navigation/native"
import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useDispatch, useSelector } from "react-redux"
import BlankPlayingComponent from "./BlankPlayingComponent"

const PlayingComponent: React.FC = () => {
  const navigation = useNavigation()
  const { artist, title, image } = useSelector(
    (state: { song: songData }) => state.song
  )
  const { playing } = useSelector(
    (state: { status: { playing: boolean } }) => state.status
  )
  const dispatch = useDispatch()

  if (artist === null) {
    return <BlankPlayingComponent />
  }

  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => navigation.navigate("Playing")}
    >
      <ImageBackground
        source={{ uri: image }}
        blurRadius={40}
        style={styles.background}
      >
        <View style={styles.backgroundColor}>
          <View style={styles.queue}>
            <MaterialIcons
              name="playlist-play"
              size={40}
              color="white"
              onPress={() => navigation.navigate("Queue")}
            />
          </View>
          <View style={styles.songInfo}>
            <Text style={styles.songTitle} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.songArtist} numberOfLines={1}>
              {artist}
            </Text>
          </View>
          <View style={styles.controls}>
            {playing ? (
              <MaterialIcons
                name="pause"
                size={40}
                color="white"
                onPress={() => dispatch({ type: "FLIP_PLAY" })}
              />
            ) : (
              <MaterialIcons
                name="play-arrow"
                size={40}
                color="white"
                onPress={() => dispatch({ type: "FLIP_PLAY" })}
              />
            )}
          </View>
        </View>
      </ImageBackground>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  background: {
    height: 100,
  },
  backgroundColor: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingBottom: 25,
    backgroundColor: "rgba(0,0,0, 0.7)",
  },
  container: {
    height: 100,
  },
  queue: {
    flex: 1,
    justifyContent: "center",
  },
  songInfo: {
    flex: 6,
    justifyContent: "center",
  },
  songTitle: {
    fontSize: 17,
    color: "white",
  },
  songArtist: {
    fontSize: 15,
    color: "#babbbd",
  },
  controls: {
    flex: 1,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default PlayingComponent
