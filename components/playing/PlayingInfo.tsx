import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { MaterialIcons, FontAwesome } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import OptionsMenu from "react-native-options-menu"

const PlayingInfo: React.FC = () => {
  const navigation = useNavigation()
  const song = useSelector((state: { song: songState }) => state.song)
  const {
    artist,
    title,
    image,
    albumName,
    releaseDate,
    albumId,
    albumArtist,
  } = song
  console.log(albumArtist)

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <OptionsMenu
          customButton={
            <MaterialIcons name="more-vert" size={30} color="white" />
          }
          options={["Go to Album", "Cancel"]}
          actions={[
            () =>
              navigation.navigate("Collection", {
                image,
                artist: albumArtist,
                albumName,
                releaseDate,
                albumId,
              }),
            () => {},
          ]}
        />
      </View>
      <View style={styles.playingInfo}>
        <Text style={styles.title} numberOfLines={1}>
          <FontAwesome name="music" size={20} color="white" />
          {`  ${title}`}
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          {artist}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <MaterialIcons
          name="keyboard-arrow-down"
          size={40}
          color="white"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  playingInfo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    marginBottom: 4,
  },
  artist: {
    fontSize: 15,
    fontWeight: "300",
    color: "#babbbd",
    marginTop: 4,
  },
})

export default PlayingInfo
