import React from "react"
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"

interface Props {
  item: any
}

const HomeItem: React.FC<Props> = ({ item }: { item: any }) => {
  const { track } = item
  const { album, artists, name } = track
  const dispatch = useDispatch()

  return (
    <TouchableOpacity
      style={styles.songContainer}
      onPress={() => {
        dispatch({
          type: "NEW_SONG",
          payload: {
            artist: artists.map((x: { name: string }) => x.name).join(", "),
            title: name,
            image: album.images[0].url,
            albumName: album.name,
            releaseDate: album["release_date"],
            albumId: album.id,
            albumArtist: album.artists
              .map((x: { name: any }) => x.name)
              .join(", "),
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
      }}
    >
      <Image source={{ uri: album.images[0].url }} style={styles.image} />
      <Text numberOfLines={1} style={styles.songTitle}>
        {name}
      </Text>
      <Text numberOfLines={1}>
        {artists.map((x: { name: string }) => x.name).join(", ")}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  songContainer: {
    width: 160,
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: "stretch",
    borderRadius: 5,
  },
  songTitle: {
    marginTop: 5,
    fontWeight: "600",
  },
})

export default HomeItem
