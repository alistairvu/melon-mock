import { MaterialIcons } from "@expo/vector-icons"
import React, { useEffect, useState } from "react"
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
} from "react-native"
import AlbumList from "../../components/search/AlbumList"
import ArtistList from "../../components/search/ArtistList"
import BlankSearch from "../../components/search/BlankSearch"
import LoadingSearch from "../../components/search/LoadingSearch"
import SearchBar from "../../components/search/SearchBar"
import SongList from "../../components/search/SongList"
import { getAlbums, getArtists, getSongs } from "../../searchUtils"

const Search: React.FC = () => {
  const [term, setTerm] = useState<string>("")
  const [songData, setSongData] = useState<Array<songData> | undefined>([])
  const [albumData, setAlbumData] = useState<Array<albumData> | undefined>([])
  const [artistData, setArtistData] = useState<Array<artistData> | undefined>(
    []
  )
  const [loading, setLoading] = useState<boolean>(false)

  const bodyDisplay: Function = (): JSX.Element | undefined => {
    if (term.length === 0) {
      return <BlankSearch />
    }
    if (loading) {
      return <LoadingSearch />
    }

    return (
      <ScrollView>
        <SongList songList={songData} query={term} />
        <AlbumList albumList={albumData} />
        <ArtistList artistList={artistData} />
      </ScrollView>
    )
  }

  const performSearch = async () => {
    setLoading(true)
    const songs = await getSongs(term)
    const albums = await getAlbums(term)
    const artists = await getArtists(term)
    setSongData(songs)
    setAlbumData(albums)
    setArtistData(artists)
    setLoading(false)
  }

  useEffect(() => {
    if (term.trim().length > 0) {
      performSearch()
    }
  }, [term])

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <SearchBar
          term={term}
          onChange={(term) => {
            setTerm(term)
          }}
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
