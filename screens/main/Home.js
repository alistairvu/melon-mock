import React from "react"
import { SafeAreaView, StyleSheet, Image, View } from "react-native"
import { Text } from "react-native-elements"
import { MaterialIcons } from "@expo/vector-icons"

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../../assets/melon-full-transparent.png")}
        />
        <MaterialIcons name="settings" size={30} color="black" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 60,
  },
  header: {
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
