import React from "react"
import { View, Image, StyleSheet } from "react-native"

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/melon-logo.png")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
})

export default Splash
