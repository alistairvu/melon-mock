import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

const BlankSearch: React.FC = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={100} color={"rgb(126, 126, 126)"} />
      <Text style={styles.searchText}>Begin your search here.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchText: {
    fontSize: 20,
    color: "rgb(126, 126, 126)",
  },
})

export default BlankSearch
