import { MaterialIcons } from "@expo/vector-icons"
import React, { useState } from "react"
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
} from "react-native"
import AlbumList from "../../components/search/AlbumList"
import BlankSearch from "../../components/search/BlankSearch"
import LoadingSearch from "../../components/search/LoadingSearch"
import SearchBar from "../../components/search/SearchBar"
import SongList from "../../components/search/SongList"
import { getAlbums, getSongs } from "../../searchUtils"

const Search: React.FC = () => {
  const [term, setTerm] = useState<string>("")
  const [searching, setSearching] = useState<boolean>(false)
  const [songData, setSongData] = useState<Array<songState>>([])
  const [albumData, setAlbumData] = useState<Array<albumData> | undefined>([])

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
        <AlbumList albumList={albumData} />
      </ScrollView>
    )
  }

  const handleSearch = async () => {
    setSearching(false)
    const data = { songs: await getSongs(term), albums: await getAlbums(term) }
    setSongData(data.songs)
    setAlbumData(data.albums)
  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <SearchBar
          term={term}
          onChange={(term) => {
            setSearching(true)
            setTerm(term)
          }}
          onEnd={handleSearch}
          onPress={() => setTerm("")}
        />
        {bodyDisplay()}
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingBottom: 10,
  },
  heading: {
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 15,
  },
  input: {
    fontSize: 20,
    paddingHorizontal: 5,
  },
  searchContainer: {
    paddingHorizontal: 10,
    height: 40,
    marginHorizontal: 10,
    backgroundColor: "#d3d3d3",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    flexDirection: "row",
  },
})

export default Search
