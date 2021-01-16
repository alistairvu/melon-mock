import React, { useState } from "react"
import { SafeAreaView, StyleSheet, TextInput } from "react-native"
import { Text } from "react-native-elements"

const Search = () => {
  const [term, setTerm] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Search</Text>
      <TextInput
        style={styles.input}
        value={term}
        onChangeText={(term) => setTerm(term)}
        placeholder="Enter your query"
        autoCorrect={false}
      />
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
  input: {
    height: 50,
    fontSize: 25,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#d3d3d3",
  },
})

export default Search
