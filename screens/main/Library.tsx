import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { StyleSheet } from "react-native"

import LibraryScreen from "../library/LibraryHome"
import SongScreen from "../library/LibrarySongs"
import AlbumScreen from "../library/LibraryAlbums"
import ArtistScreen from "../library/LibraryArtists"

const Stack = createStackNavigator()

const Library: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Songs"
        component={SongScreen}
        options={{
          headerTintColor: styles.headerStyles.color,
          headerTitleStyle: styles.screenNameStyle,
        }}
      />
      <Stack.Screen
        name="Albums"
        component={AlbumScreen}
        options={{
          headerTintColor: styles.headerStyles.color,
          headerTitleStyle: styles.screenNameStyle,
        }}
      />
      <Stack.Screen
        name="Artists"
        component={ArtistScreen}
        options={{
          headerTintColor: styles.headerStyles.color,
          headerTitleStyle: styles.screenNameStyle,
        }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  headerStyles: {
    color: "rgb(97, 209, 84)",
  },
  screenNameStyle: {
    color: "black",
  },
})

export default Library
