import React from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { useDispatch } from "react-redux"

const AlbumItem = ({
  title,
  artist,
  image,
  index,
  releaseDate,
  albumName,
  albumId,
}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handlePress = () => {
    dispatch({
      type: "NEW_SONG",
      payload: { artist, title, image, releaseDate, albumName, albumId },
    }),
      dispatch({
        type: "SET_PLAY",
        payload: true,
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
