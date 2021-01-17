import axios from "axios"
import React, { useState, useEffect } from "react"
import { ActivityIndicator, FlatList } from "react-native"
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native"
import { Text } from "react-native-elements"
import ChartItem from "../../components/SongItem"
import { StatusBar } from "expo-status-bar"

const Charts = () => {
  const [date, setDate] = useState(null)
  const [time, setTime] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [songData, setSongData] = useState([])

  const urlChart =
    "https://rss.itunes.apple.com/api/v1/us/itunes-music/top-songs/all/100/explicit.json"

  const getSongs = async () => {
    try {
      setLoaded(false)
      const res = await axios.get(urlChart)
      const data = await res.data
      setSongData(data.feed.results)
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
        <View style={styles.loadSpinner}>
          <ActivityIndicator size="large"></ActivityIndicator>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.heading}>Top Songs</Text>
      <FlatList
        data={songData}
        renderItem={({ item }) => {
          const { artistName, name, artworkUrl100 } = item
          return (
            <ChartItem artist={artistName} title={name} image={artworkUrl100} />
          )
        }}
        ListHeaderComponent={
          <Text style={styles.chartTitle}>
            {date} - {time}
          </Text>
        }
        style={styles.chartList}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
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
