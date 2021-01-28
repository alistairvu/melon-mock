import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import SongItem from "../items/SongItem"

interface TopSongsProps {
  songList: songData[]
}

const TopSongs = ({ songList }: TopSongsProps) => {
  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Top Songs")}>
        <Text style={styles.title}>Top Songs</Text>
      </TouchableOpacity>
      <View style={styles.songList}>
        {songList.map((item, index) => (
          <SongItem {...item} key={index} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  songList: {
    marginLeft: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    marginTop: 10,
    marginLeft: 10,
  },
})

export default TopSongs
