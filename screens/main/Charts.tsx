import React, { useState, useEffect } from "react"
import { ActivityIndicator, FlatList } from "react-native"
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native"
import { Text } from "react-native-elements"
import ChartItem from "../../components/SongItem"
import { StatusBar } from "expo-status-bar"
import { getToken } from "../../utils"
import PlayingComponent from "../../components/PlayingComponent"

const Charts: React.FC = () => {
  const [date, setDate] = useState<string | null>(null)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [songData, setSongData] = useState<Array<any>>([])

  const getSongs = async () => {
    const token = await getToken()
    try {
      const res = await fetch(
        "https://api.spotify.com/v1/playlists/37i9dQZEVXbLRQDuF5jeBp/tracks?market=VN&fields=items(track(album(images%2Cname%2Crelease_date%2Cartists)%252Cartists(name)%252Cname%252Cid))",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const data = await res.json()
      setSongData(data.items)
      setLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const today = new Date()
    setDate(
      today.toLocaleString("en-AU", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      })
    )

    getSongs()
  }, [])

  if (!loaded) {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.loading}>
          <Text style={styles.loadingHeading}>Top Songs</Text>
          <View style={styles.loadSpinner}>
            <ActivityIndicator size="large"></ActivityIndicator>
          </View>
        </SafeAreaView>
        <PlayingComponent />
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <Text style={styles.heading}>Top Songs</Text>
        <FlatList
          data={songData}
          renderItem={({ item }) => {
            const { track } = item
            const { album, artists, name } = track
            return (
              <ChartItem
                title={name}
                albumArtist={album.artists
                  .map((x: { name: any }) => x.name)
                  .join(", ")}
                artist={artists.map((x: { name: any }) => x.name).join(", ")}
                image={album.images[0].url}
                albumName={album.name}
                releaseDate={album["release_date"]}
                albumId={album.id}
              />
            )
          }}
          ListHeaderComponent={<Text style={styles.chartTitle}>{date}</Text>}
          style={styles.chartList}
          keyExtractor={(item) => item.track.id}
        />
      </SafeAreaView>
      <PlayingComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 60,
    flex: 1,
  },
  heading: {
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 15,
  },
  chartTitle: {
    textAlign: "center",
    fontSize: 17,
    marginBottom: 15,
    fontWeight: "500",
    color: "rgb(126, 126, 126)",
    textTransform: "uppercase",
  },
  loading: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 60,
  },
  loadingHeading: {
    alignSelf: "flex-start",
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 15,
  },
  chartList: {
    flex: 1,
  },
  loadSpinner: {
    flex: 1,
    justifyContent: "center",
  },
})

export default Charts
