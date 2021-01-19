import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { View, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"
import Navigation from "./Navigation"
import PlayingComponent from "../components/playing/PlayingComponent"

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Navigation />
      <PlayingComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})

export default Main
