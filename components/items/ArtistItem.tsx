import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Text, Image, TouchableOpacity, StyleSheet } from "react-native"

const AlbumSearchItem: React.FC<artistData> = (props) => {
  const { name, image, id } = props
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text numberOfLines={1} style={styles.name}>
        {name}
      </Text>
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
    borderRadius: 75,
    resizeMode: "stretch",
  },
})

export default AlbumSearchItem
