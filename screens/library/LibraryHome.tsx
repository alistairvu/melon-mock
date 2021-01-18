import { useNavigation } from "@react-navigation/native"
import React from "react"
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native"
import { Text } from "react-native-elements"
import PlayingComponent from "../../components/PlayingComponent"

const LibraryHome: React.FC = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Text h1 style={styles.heading}>
          Library
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Songs")}
          style={styles.navOpacity}
        >
          <Text style={styles.navOpacityText}>Songs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Albums")}
          style={styles.navOpacity}
        >
          <Text style={styles.navOpacityText}>Albums</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Artists")}
          style={{
            ...styles.navOpacity,
            borderBottomColor: "#babbbd",
            borderBottomWidth: 1,
          }}
        >
          <Text style={styles.navOpacityText}>Artists</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <PlayingComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  heading: {
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 15,
    marginHorizontal: 10,
  },
  navOpacity: {
    height: 70,
    justifyContent: "center",
    borderTopColor: "#babbbd",
    borderTopWidth: 1,
  },
  navOpacityText: {
    fontSize: 30,
    fontWeight: "700",
    marginLeft: 10,
  },
})

export default LibraryHome
