import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialIcons } from "@expo/vector-icons"
import { View, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"

import ChartScreen from "./main/Charts"
import HomeScreen from "./main/Home"
import LibraryScreen from "./main/Library"
import SearchScreen from "./main/Search"

const Tab = createBottomTabNavigator()

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "rgb(97, 209, 84)",
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home-filled" size={35} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Charts"
          component={ChartScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="local-fire-department"
                size={35}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="search" size={35} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="library-music" size={35} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
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
