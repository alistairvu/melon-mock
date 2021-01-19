import React from "react"
import { View } from "react-native"
import HomeItem from "../../components/items/HomeItem"
import { ScrollView } from "react-native-gesture-handler"
import ScreenHeader from "../../components/ScreenHeader"

const Home: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Home" />
      <ScrollView showsVerticalScrollIndicator={false}>
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

export default Home
