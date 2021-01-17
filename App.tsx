import React, { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack"
import { StyleSheet } from "react-native"
import { Provider } from "react-redux"
import store from "./redux/store"

import Main from "./screens/Main"
import SplashScreen from "./screens/Splash"
import Playing from "./screens/main/Playing"
import Queue from "./screens/main/Queue"
import Collection from "./screens/item/Collection"

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
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode={"none"}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen
            name="Playing"
            component={Playing}
            options={{
              gestureDirection: "vertical",
              cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
              gestureResponseDistance: {
                vertical: 500,
              },
            }}
          />
          <Stack.Screen
            name="Queue"
            component={Queue}
            options={{ animationEnabled: false }}
          />
          <Stack.Screen name="Collection" component={Collection} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
