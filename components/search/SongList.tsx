import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import SongItem from "../items/SongItem"
import { MaterialIcons } from "@expo/vector-icons"

interface Props {
  songList: Array<songData> | undefined
  query: string
}

const SongList: React.FC<Props> = ({ songList, query }) => {
  const navigation = useNavigation()

  if (songList !== undefined) {
    const displayList = songList.length > 8 ? songList.slice(0, 8) : songList

    if (songList.length === 0) {
      return (
        <View style={{ marginHorizontal: 10 }}>
          <Text style={styles.headerText}>Songs</Text>
          <Text style={{ textAlign: "center", color: "rgb(126, 126, 126)" }}>
            No songs matching {query} found.
          </Text>
        </View>
      )
    }

    const songDisplay = displayList.map((item, index) => {
      return <SongItem {...item} key={index}></SongItem>
    })

    return (
      <View style={{ marginHorizontal: 10 }}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() =>
            navigation.navigate("All Songs", {
              songList,
              query,
            })
          }
        >
          <Text style={styles.headerText}>Songs</Text>
          <MaterialIcons name="keyboard-arrow-right" size={40} color="black" />
        </TouchableOpacity>
        {songDisplay}
      </View>
    )
  }

  return (
    <View style={{ marginHorizontal: 10 }}>
      <Text style={styles.headerText}>Songs</Text>
      <Text style={{ textAlign: "center", color: "rgb(126, 126, 126)" }}>
        No matching songs found.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 15,
    marginTop: 10,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
})

export default SongList
