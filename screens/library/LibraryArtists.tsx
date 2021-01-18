import React from "react"
import { SafeAreaView, StyleSheet, View } from "react-native"
import { Text } from "react-native-elements"
import PlayingComponent from "../../components/playing/PlayingComponent"

const LibraryArtists: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Text h1 style={styles.heading}>
          Artists
        </Text>
      </SafeAreaView>
      <PlayingComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  heading: {
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 15,
  },
})

export default LibraryArtists
