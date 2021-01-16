import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import { Text } from "react-native-elements"

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Search</Text>
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

export default Search
