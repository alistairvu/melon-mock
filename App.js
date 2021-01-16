import React, { useState, useEffect } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { MaterialIcons } from "@expo/vector-icons"
import { View, StyleSheet } from "react-native"

import ChartScreen from "./screens/main/Charts"
import HomeScreen from "./screens/main/Home"
import LibraryScreen from "./screens/main/Library"
import SearchScreen from "./screens/main/Search"
import SplashScreen from "./screens/Splash"

const Tab = createBottomTabNavigator()

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 2000)
  })

  if (!loaded) {
    return <SplashScreen />
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
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
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
