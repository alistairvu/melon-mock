import React from "react"
import { SafeAreaView, StyleSheet, View } from "react-native"
import { Text } from "react-native-elements"
import PlayingComponent from "../../components/PlayingComponent"

const Library: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Text h1 style={styles.heading}>
          Library
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
    marginTop: 60,
  },
  heading: {
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 15,
  },
})

export default Library
