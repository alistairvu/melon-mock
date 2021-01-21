import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import ArtistSearchItem from "./ArtistSearchItem"

interface Props {
  albumList: Array<artistData> | undefined
}

const ArtistList: React.FC<Props> = ({ albumList: artistList }) => {
  if (artistList !== undefined) {
    const displayList =
      artistList.length > 5 ? artistList.slice(0, 5) : artistList

    if (artistList.length === 0) {
      return (
        <View>
          <Text style={styles.title}>Artists</Text>
          <Text style={{ textAlign: "center", color: "rgb(126, 126, 126)" }}>
            No matching albums found.
          </Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Artists</Text>
        <FlatList
          data={displayList}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => <ArtistSearchItem {...item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    )
  }
  return (
    <View>
      <Text style={styles.title}>Artists</Text>
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
})

export default ArtistList
