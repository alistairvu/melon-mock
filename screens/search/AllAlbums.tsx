import { RouteProp, useRoute } from "@react-navigation/native"
import React from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import SongItem from "../../components/items/SongItem"
import AlbumSearchItem from "../../components/search/AlbumSearchItem"

type ParamList = {
  AllSongs: {
    albumList: Array<albumData>
    query: string
  }
}

const AllAlbums: React.FC = () => {
  const route = useRoute<RouteProp<ParamList, "AllSongs">>()
  const { albumList } = route.params

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={styles.container}
        data={albumList}
        numColumns={2}
        renderItem={({ item }) => <AlbumSearchItem {...item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 10,
    paddingBottom: 10,
  },
})

export default AllAlbums
