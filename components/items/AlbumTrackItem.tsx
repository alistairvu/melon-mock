import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useDispatch } from "react-redux"

interface Props {
  title: string
  artist: string
  albumArtist: string
  image: string
  albumName: string
  releaseDate: string
  albumId: string
  index: number
}

const AlbumItem: React.FC<Props> = ({
  title,
  artist,
  image,
  index,
  albumArtist,
  releaseDate,
  albumName,
  albumId,
}) => {
  const dispatch = useDispatch()

  const handlePress = () => {
    dispatch({
      type: "NEW_SONG",
      payload: {
        artist,
        title,
        image,
        releaseDate,
        albumName,
        albumId,
        albumArtist,
      },
    })
    dispatch({
      type: "SET_PLAY",
      payload: true,
    })
    dispatch({
      type: "SET_PLAY_VAL",
      payload: 0,
    })
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.data}>
        <Text style={styles.songIndex}>{index < 10 ? `0${index}` : index}</Text>
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.artist} numberOfLines={1}>
            {artist}
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <MaterialIcons name="more-vert" size={30} color="black" />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginVertical: 10,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  data: {
    flex: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  songIndex: {
    fontSize: 15,
    width: 25,
    color: "rgb(126, 126, 126)",
    fontWeight: "500",
    textAlign: "center",
  },
  info: {
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
  },
  title: {
    color: "#000",
    fontSize: 17,
    overflow: "hidden",
  },
  artist: {
    color: "rgb(126, 126, 126)",
    fontSize: 15,
  },
  buttons: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
})

export default AlbumItem
