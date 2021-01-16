import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import { Text } from "react-native-elements"

const Library = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text h1 style={styles.heading}>
        Library
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
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
