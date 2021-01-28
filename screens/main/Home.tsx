import React, { useEffect, useState } from "react"
import { ActivityIndicator, SafeAreaView, View, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import NewReleases from "../../components/home/NewReleases"
import TopSongs from "../../components/home/TopSongs"
import ScreenHeader from "../../components/ScreenHeader"
import { getChart } from "../../utils"
import { getNewReleases } from "../../utils/homeUtils"

const Home = () => {
  const [loaded, setLoaded] = useState<boolean>(false)
  const [releaseList, setReleaseList] = useState<albumData[]>([])
  const [songList, setSongList] = useState<songData[]>([])

  const fetchData = async () => {
    const releases = await getNewReleases()
    const topSongs = await getChart()
    setReleaseList(releases)

    if (topSongs) {
      setSongList(topSongs.slice(0, 10))
    }
    setLoaded(true)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!loaded) {
    return (
      <View style={{ flex: 1 }}>
        <ScreenHeader title="Home" />
        <SafeAreaView style={styles.loading}>
          <View style={styles.loadSpinner}>
            <ActivityIndicator size="large"></ActivityIndicator>
          </View>
        </SafeAreaView>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Home" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <NewReleases releaseList={releaseList} />
        <TopSongs songList={songList} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 60,
  },
  loadSpinner: {
    flex: 1,
    justifyContent: "center",
  },
})

export default Home
