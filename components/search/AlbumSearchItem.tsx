import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Text, Image, TouchableOpacity, StyleSheet } from "react-native"

const AlbumSearchItem: React.FC<albumData> = (props) => {
  const { artist, image, albumName, releaseDate, albumId } = props
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Collection", { ...props })}
      style={styles.container}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text numberOfLines={1} style={styles.name}>
        {albumName}
      </Text>
      <Text numberOfLines={1}>{artist}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
  },
  name: {
    marginTop: 5,
    fontWeight: "600",
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: "stretch",
    borderRadius: 5,
  },
})

export default AlbumSearchItem
