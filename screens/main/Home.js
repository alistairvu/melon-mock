import React from "react"
import { StyleSheet, Image, View } from "react-native"
import { Text } from "react-native-elements"
import { MaterialIcons } from "@expo/vector-icons"
import HomeItem from "../../components/HomeItem"
import { ScrollView } from "react-native-gesture-handler"

const Home = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../../assets/melon-full-transparent.png")}
        />
        <MaterialIcons name="settings" size={30} color="black" />
      </View>
      <HomeItem
        link="https://rss.itunes.apple.com/api/v1/us/itunes-music/hot-tracks/all/5/explicit.json"
        title={"Hot Tracks"}
        type={"songs"}
      />
      <HomeItem
        link="https://rss.itunes.apple.com/api/v1/us/itunes-music/top-songs/all/5/explicit.json"
        title={"Top Songs"}
        type={"songs"}
      />
      <HomeItem
        link="https://rss.itunes.apple.com/api/v1/us/itunes-music/new-music/all/5/explicit.json"
        title={"New Music"}
        type={"collection"}
      />
      <HomeItem
        link="https://rss.itunes.apple.com/api/v1/us/itunes-music/top-albums/all/5/explicit.json"
        title={"Top Albums"}
        type={"collection"}
      />
      <HomeItem
        link="https://rss.itunes.apple.com/api/v1/us/itunes-music/recent-releases/all/5/explicit.json"
        title={"Recent Releases"}
        type={"collection"}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  header: {
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
  },
})

export default Home
