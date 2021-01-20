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
      <Image source={{ uri: image }} />
      <Text numberOfLines={1}>{albumName}</Text>
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
})

export default AlbumSearchItem
