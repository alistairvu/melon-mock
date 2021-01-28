import React from "react"
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native"
import AlbumItem from "../items/AlbumItem"

interface NewReleasesProps {
  releaseList: albumData[]
}

const NewReleases = ({ releaseList }: NewReleasesProps) => {
  return (
    <View>
      <Text style={styles.title}>New Releases</Text>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10 }}
      >
        <FlatList
          data={releaseList}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          contentContainerStyle={{
            alignSelf: "flex-start",
          }}
          numColumns={10}
          renderItem={({ item }) => <AlbumItem {...item} />}
          keyExtractor={(item) => item.albumId}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "700",
    marginTop: 10,
    marginLeft: 10,
  },
})

export default NewReleases
