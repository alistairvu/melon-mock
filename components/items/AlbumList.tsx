import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import AlbumItem from "./AlbumItem"

interface Props {
  albumList: Array<albumData> | undefined
  query: string
}

const AlbumList: React.FC<Props> = ({ albumList, query }) => {
  const navigation = useNavigation()

  if (albumList !== undefined) {
    const displayList = albumList.length > 5 ? albumList.slice(0, 5) : albumList

    if (albumList.length === 0) {
      return (
        <View>
          <Text style={styles.title}>Albums</Text>
          <Text style={{ textAlign: "center", color: "rgb(126, 126, 126)" }}>
            No albums matching {query} found.
          </Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() =>
            navigation.navigate("All Albums", {
              albumList,
              query,
            })
          }
        >
          <Text style={styles.title}>Albums</Text>
          <MaterialIcons name="keyboard-arrow-right" size={40} color="black" />
        </TouchableOpacity>
        <FlatList
          data={displayList}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => <AlbumItem {...item} />}
          keyExtractor={(item) => item.albumId}
        />
      </View>
    )
  }
  return (
    <View>
      <Text style={styles.title}>Albums</Text>
      <Text style={{ textAlign: "center", color: "rgb(126, 126, 126)" }}>
        No matching albums found.
      </Text>
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
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
})

export default AlbumList
