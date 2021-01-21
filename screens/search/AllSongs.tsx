import { RouteProp, useRoute } from "@react-navigation/native"
import React from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import SongItem from "../../components/items/SongItem"

type ParamList = {
  AllSongs: {
    songList: Array<songData>
    query: string
  }
}

const AllSongs: React.FC = () => {
  const route = useRoute<RouteProp<ParamList, "AllSongs">>()
  const { songList } = route.params

  return (
    <View style={styles.container}>
      <FlatList
        data={songList}
        renderItem={({ item }) => <SongItem {...item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
})

export default AllSongs
