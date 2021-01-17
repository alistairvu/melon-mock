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
import OptionsMenu from "react-native-options-menu"

const SongItem = ({
  title,
  artist,
  image,
  albumName,
  releaseDate,
  albumId,
}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handlePress = () => {
    console.log(image)
    dispatch({
      type: "NEW_SONG",
      payload: {
        artist,
        title,
        image,
        albumName,
        releaseDate,
        albumId,
      },
    })
    navigation.navigate("Playing")
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.data}>
        <Image style={styles.image} source={{ uri: image }} />
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
        <OptionsMenu
          customButton={
            <MaterialIcons name="more-vert" size={30} color="black" />
          }
          options={["Go to Album", "Cancel"]}
          actions={[
            () =>
              navigation.navigate("Collection", {
                image,
                artist,
                albumName,
                releaseDate,
                albumId,
              }),
            () => {},
          ]}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  data: {
    flex: 8,
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    overflow: "hidden",
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
    justifyContent: "center",
  },
})

export default SongItem
