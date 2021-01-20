import React from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

interface Props {
  title: string
}

const ScreenHeader: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation<any>()

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, paddingLeft: 10 }}>
        <MaterialIcons
          name="menu"
          size={24}
          color="#00ce3b"
          onPress={() => navigation.openDrawer()}
        />
      </View>
      <View style={{ flex: 8, alignItems: "center" }}>
        <Text style={styles.headerStyles}>{title}</Text>
      </View>
      <View style={{ flex: 1, paddingLeft: 10 }}>
        <MaterialIcons
          name="search"
          size={24}
          color="#00ce3b"
          onPress={() => navigation.navigate("Search")}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  headerStyles: {
    fontSize: 20,
    fontWeight: "500",
  },
})

export default ScreenHeader
