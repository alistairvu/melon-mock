import React, { useState } from "react"
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native"
import { Text } from "react-native-elements"
import PlayingComponent from "../../components/playing/PlayingComponent"
import BlankSearch from "../../components/search/BlankSearch"
import { getToken } from "../../utils"

const Search: React.FC = () => {
  const [term, setTerm] = useState("")
  const [searching, setSearching] = useState(true)
  const [searchData, setSearchData] = useState([])

  const handleSearch = () => {
    console.log(term)
  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Search</Text>
        <TextInput
          style={styles.input}
          value={term}
          onChangeText={(term) => setTerm(term)}
          placeholder="Enter your query"
          autoCorrect={false}
          onEndEditing={handleSearch}
        />
        <BlankSearch />
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
  input: {
    height: 40,
    fontSize: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#d3d3d3",
  },
})

export default Search
