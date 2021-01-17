import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useDispatch, useSelector } from "react-redux"

const PlayingComponent: React.FC = () => {
  const navigation = useNavigation()
  const { artist, title } = useSelector(
    (state: { song: songState }) => state.song
  )
  const { playing } = useSelector(
    (state: { status: { playing: boolean } }) => state.status
  )
  const dispatch = useDispatch()

  if (artist === null) {
    return <View></View>
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Playing")}
    >
      <View style={styles.queue}>
        <MaterialIcons
          name="playlist-play"
          size={40}
          color="black"
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
            color="black"
            onPress={() => dispatch({ type: "FLIP_PLAY" })}
          />
        ) : (
          <MaterialIcons
            name="play-arrow"
            size={40}
            color="black"
            onPress={() => dispatch({ type: "FLIP_PLAY" })}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
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
  },
  songArtist: {
    fontSize: 15,
    color: "rgb(126, 126, 126)",
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
