import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import AlbumSearchItem from "./AlbumSearchItem"

interface Props {
  albumList: Array<albumData>
}

const AlbumList: React.FC<Props> = ({ albumList }) => {
  const displayList = albumList.length > 8 ? albumList.slice(0, 5) : albumList

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Albums</Text>
      <FlatList
        data={displayList}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item }) => <AlbumSearchItem {...item} />}
        keyExtractor={(item) => item.albumId}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 15,
    marginLeft: 10,
  },
})

export default AlbumList
