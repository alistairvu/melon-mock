import React, { useState } from "react"
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native"
import { Text } from "react-native-elements"

const Search = () => {
  const [term, setTerm] = useState("")
  const [searching, setSearching] = useState(true)
  const [searchData, setSearchData] = useState([])

  const contentDisplay = () => {
    if (searching === false) {
      return null
    }
    if (searchData.length === 0) {
      return <ActivityIndicator size="large"></ActivityIndicator>
    }
  }

  console.log(contentDisplay())

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
    height: 40,
    fontSize: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#d3d3d3",
  },
})

export default Search
