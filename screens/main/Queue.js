import React from "react"
import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { StatusBar } from "expo-status-bar"
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const Queue = () => {
  const image = useSelector(({ song }) => song.image)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { playing, shuffle, loop } = useSelector((state) => state.status)

  return (
    <ImageBackground
      source={{ uri: image }}
      style={styles.background}
      blurRadius={40}
    >
      <StatusBar style="light" />
      <View style={styles.container}>
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.header}>
            <Text style={styles.heading}>Queue</Text>
            <MaterialIcons
              name="close"
              size={30}
              color="white"
              onPress={() => navigation.pop()}
            />
          </View>
          <View style={styles.content}></View>
          <View style={styles.controls}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Playing")}>
                <Image source={{ uri: image }} style={styles.smallCover} />
              </TouchableOpacity>
            </View>
            <View style={styles.play}>
              <MaterialIcons
                name="skip-previous"
                size={40}
                color="white"
                style={{ marginRight: 30 }}
              />
              {playing ? (
                <MaterialIcons
                  name="pause"
                  size={60}
                  color="white"
                  onPress={() => dispatch({ type: "FLIP_PLAY" })}
                />
              ) : (
                <MaterialIcons
                  name="play-arrow"
                  size={60}
                  color="white"
                  onPress={() => dispatch({ type: "FLIP_PLAY" })}
                />
              )}
              <MaterialIcons
                name="skip-next"
                size={40}
                color="white"
                style={{ marginLeft: 30 }}
              />
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <MaterialIcons name="speaker-group" size={30} color="white" />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.7)",
  },
  safeContainer: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 20,
  },
  heading: {
    color: "white",
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 15,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    flex: 39 / 5,
  },
  controls: {
    flex: 6 / 5,
    flexDirection: "row",
    alignItems: "center",
  },
  smallCover: {
    width: 40,
    height: 40,
    borderRadius: 5,
    overflow: "hidden",
  },
  play: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
})

export default Queue
