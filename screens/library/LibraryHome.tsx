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
        <TouchableOpacity onPress={() => navigation.navigate("Songs")}>
          <Text>Songs</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <PlayingComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 60,
  },
  heading: {
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 15,
  },
})

export default LibraryHome
