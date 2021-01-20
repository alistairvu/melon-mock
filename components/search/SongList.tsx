import React from "react"
import { View, Text, StyleSheet } from "react-native"
import SongItem from "../items/SongItem"

interface Props {
  songList: Array<songState>
}

const SongList: React.FC<Props> = ({ songList }) => {
  const displayList = songList.length > 8 ? songList.slice(0, 8) : songList

  const songDisplay = displayList.map((item, index) => {
    return <SongItem {...item} key={index}></SongItem>
  })

  return (
    <View style={{ marginHorizontal: 10 }}>
      <Text style={styles.headerText}>Songs</Text>
      {songDisplay}
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
})

export default SongList
