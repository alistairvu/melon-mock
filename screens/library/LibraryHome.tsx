import { useNavigation } from "@react-navigation/native"
import React from "react"
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native"
import { Text } from "react-native-elements"
import ScreenHeader from "../../components/ScreenHeader"

const LibraryHome: React.FC = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Library" />
      <SafeAreaView style={styles.container}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
