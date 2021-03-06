import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { View, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"
import DrawerScreen from "./main/Drawer"
import Search from "./main/Search"
import Collection from "./item/Collection"
import AllSongs from "./search/AllSongs"
import AllAlbums from "./search/AllAlbums"

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
        <Stack.Screen
          name="All Songs"
          component={AllSongs}
          options={({ route }: { route: any }) => ({
            headerTintColor: "#00ce3b",
            headerTitleStyle: { color: "#000" },
            headerBackTitle: "Back",
            title: `Songs matching "${route.params.query}"`,
          })}
        />
        <Stack.Screen
          name="All Albums"
          component={AllAlbums}
          options={({ route }: { route: any }) => ({
            headerTintColor: "#00ce3b",
            headerTitleStyle: { color: "#000" },
            headerBackTitle: "Back",
            title: `Albums matching "${route.params.query}"`,
          })}
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
