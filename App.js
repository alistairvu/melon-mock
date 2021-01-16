import React, { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { MaterialIcons } from "@expo/vector-icons"
import { createStackNavigator } from "@react-navigation/stack"
import { View, StyleSheet } from "react-native"

import Main from "./screens/Main"
import SplashScreen from "./screens/Splash"
import Playing from "./screens/main/Playing"

const Stack = createStackNavigator()

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500)
  })

  if (!loaded) {
    return <SplashScreen />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false} mode={"modal"}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen
          name="Playing"
          component={Playing}
          options={{ gestureDirection: "vertical" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
