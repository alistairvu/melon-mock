import axios from "axios"
import React, { useState, useEffect } from "react"
import { ActivityIndicator, FlatList } from "react-native"
import { SafeAreaView, StyleSheet, View } from "react-native"
import { Text } from "react-native-elements"
import ChartItem from "../../components/ChartItem"

const Charts = () => {
  const [date, setDate] = useState(null)
  const [time, setTime] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [songData, setSongData] = useState([])

  const getSongs = async () => {
    try {
      const res = await axios.get(
        "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF?fields=tracks(items(track(album(name%2Cimages)%2Cartists(name)%2Cname%2Cid)))",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              "Bearer BQCb1s-iRA5RMnsEVA9heh2iusNMIOQyujhdKlIdQ4gUcy3eoLy4qAiJKnm1ndTsWTZuX6SzvwqF1PhHafAftUQZgoBenbs8LG37K-vI3Hw3JNo9bRlH9OK4njmRb-IMYtqVz6kN4WYyb7xOxQx0X9phM748GQ",
          },
        }
      )
      const data = await res.data
      setSongData(data.tracks.items)
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
    setTime(
      today.toLocaleString("en-AU", {
        hour: "2-digit",
        hour12: false,
        minute: "2-digit",
      })
    )
    getSongs()
  }, [])

  if (!loaded) {
    return (
      <SafeAreaView style={styles.loading}>
        <Text style={styles.loadingHeading}>Top Songs</Text>
        <View style={styles.loading}>
          <ActivityIndicator size="large"></ActivityIndicator>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Top Songs</Text>

      <FlatList
        data={songData}
        renderItem={({ item }) => {
          const { album, artists, name } = item.track
          const artistDisplay = artists.map((x) => x.name).join(", ")
          return (
            <ChartItem
              artist={artistDisplay}
              title={name}
              image={album.images[1].url}
            />
          )
        }}
        ListHeaderComponent={
          <Text style={styles.chartTitle}>
            {date} - {time}
          </Text>
        }
        style={styles.chartList}
        keyExtractor={({ track }) => track.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
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
    justifyContent: "center",
    alignItems: "center",
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
})

export default Charts
