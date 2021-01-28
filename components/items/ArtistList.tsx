import { MaterialIcons } from "@expo/vector-icons"
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import ArtistSearchItem from "./ArtistItem"

interface Props {
  artistList: Array<artistData> | undefined
}

const ArtistList: React.FC<Props> = ({ artistList }) => {
  if (artistList !== undefined) {
    const displayList =
      artistList.length > 4 ? artistList.slice(0, 4) : artistList

    if (artistList.length === 0) {
      return (
        <View>
          <Text style={styles.title}>Artists</Text>
          <Text
            style={{
              textAlign: "center",
              color: "rgb(126, 126, 126)",
              marginBottom: 20,
            }}
          >
            No matching artists found.
          </Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.headerContainer}>
          <Text style={styles.title}>Artists</Text>
          <MaterialIcons name="keyboard-arrow-right" size={40} color="black" />
        </TouchableOpacity>
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
        No matching artists found.
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

export default ArtistList
