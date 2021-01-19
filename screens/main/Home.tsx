import React from "react"
import { StyleSheet, Image, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import HomeItem from "../../components/items/HomeItem"
import { ScrollView } from "react-native-gesture-handler"

const Home: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require("../../assets/melon-full-transparent.png")}
          />
          <MaterialIcons name="settings" size={30} color="black" />
        </View>
        <HomeItem
          link="37i9dQZF1DXcBWIGoYBM5M"
          title={"Today's Top Hits"}
          type={"songs"}
        />
        <HomeItem
          link="37i9dQZF1EpxDXt2xefJcM"
          title={"Your Top Songs"}
          type={"songs"}
        />
        <HomeItem
          link="37i9dQZEVXbL1G1MbPav3j"
          title={"Burning Up"}
          type={"songs"}
        />
        <HomeItem
          link="37i9dQZF1DX5G3iiHaIzdf"
          title={"New Releases"}
          type={"songs"}
        />
        <HomeItem
          link="6kbzPEHj3uMPRFsR3v6xzE"
          title={"Melon Daily"}
          type={"songs"}
        />
      </ScrollView>
    </View>
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
