import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { View, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"
import DrawerScreen from "./main/Drawer"
import Search from "./main/Search"
import Collection from "./item/Collection"

const Stack = createStackNavigator()

const Navigation: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Drawer"
          options={{ headerShown: false }}
          component={DrawerScreen}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTintColor: "#00ce3b",
            headerTitleStyle: { color: "#000" },
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="Collection"
          component={Collection}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})

export default Navigation
