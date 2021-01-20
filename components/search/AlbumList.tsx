import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import AlbumSearchItem from "./AlbumSearchItem"

interface Props {
  albumList: Array<albumData> | undefined
}

const AlbumList: React.FC<Props> = ({ albumList }) => {
  if (albumList !== undefined) {
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
  return (
    <View>
      <Text style={styles.title}>Albums</Text>
      <Text>No albums found</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 10,
  },
  container: {
    marginTop: 15,
    marginBottom: 15,
  },
})

export default AlbumList
