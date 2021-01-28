import React, { useState, useEffect } from "react"
import { ActivityIndicator, FlatList } from "react-native"
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native"
import ChartItem from "../../components/items/SongItem"
import { StatusBar } from "expo-status-bar"
import { getToken } from "../../utils/utils"
import ScreenHeader from "../../components/ScreenHeader"
import { getChart } from "../../utils"

const Charts: React.FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false)
  const [songData, setSongData] = useState<Array<any> | undefined>([])

  const fetchChart = async () => {
    const data = await getChart()
    setSongData(data)
    setLoaded(true)
  }

  useEffect(() => {
    fetchChart()
  }, [])

  if (!loaded) {
    return (
      <View style={{ flex: 1 }}>
        <ScreenHeader title="Top Songs" />
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
      <ScreenHeader title="Top Songs" />
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <FlatList
          data={songData}
          renderItem={({ item }) => <ChartItem {...item} />}
          style={styles.chartList}
          keyExtractor={(item, index) => `${item}${index}`}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
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
