import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { MaterialIcons, FontAwesome } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const PlayingInfo = ({ title, artist }) => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <MaterialIcons name="more-vert" size={30} color="white" />
      </View>
      <View style={styles.playingInfo}>
        <Text style={styles.title} numberOfLines={1}>
          <FontAwesome name="music" size={20} color="white" />
          {`  ${title}`}
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          {artist}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <MaterialIcons
          name="keyboard-arrow-down"
          size={40}
          color="white"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  playingInfo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    marginBottom: 4,
  },
  artist: {
    fontSize: 15,
    fontWeight: "300",
    color: "#babbbd",
    marginTop: 4,
  },
})

export default PlayingInfo
