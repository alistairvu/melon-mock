import React from "react"
import { View, Text, StyleSheet, ImageBackground } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const BlankPlayingComponent: React.FC = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.queue}>
        <MaterialIcons
          name="playlist-play"
          size={40}
          color="white"
          onPress={() => navigation.navigate("Queue")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Play a song to get started...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "rgba(0,0,0, 0.7)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  queue: {
    flex: 1,
  },
  textContainer: {
    flex: 7,
  },
  textStyle: {
    fontSize: 17,
    color: "white",
  },
})

export default BlankPlayingComponent
