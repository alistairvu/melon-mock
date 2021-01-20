import React, { useState } from "react"
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
} from "react-native"
import BlankSearch from "../../components/search/BlankSearch"
import LoadingSearch from "../../components/search/LoadingSearch"
import SongList from "../../components/search/SongList"
import { getSongs } from "../../searchUtils"

const Search: React.FC = () => {
  const [term, setTerm] = useState<string>("")
  const [searching, setSearching] = useState<boolean>(false)
  const [songData, setSongData] = useState<Array<songState> | null>(null)

  const bodyDisplay: Function = (): JSX.Element | undefined => {
    if (term.length === 0) {
      return <BlankSearch />
    }
    if (searching || songData === null) {
      return <LoadingSearch />
    }

    return (
      <ScrollView>
        <SongList songList={songData} />
      </ScrollView>
    )
  }

  const handleSearch = async () => {
    setSearching(false)
    const data = await getSongs(term)
    setSongData(data)
  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            value={term}
            onChangeText={(term) => {
              setSearching(true)
              setTerm(term)
            }}
            placeholder="Enter your query"
            autoCorrect={false}
            onEndEditing={handleSearch}
          />
        </View>
        {bodyDisplay()}
      </SafeAreaView>
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
  input: {
    height: 40,
    fontSize: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#d3d3d3",
    marginBottom: 10,
  },
})

export default Search
