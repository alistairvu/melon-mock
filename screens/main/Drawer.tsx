import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "./Home"
import Charts from "./Charts"
import Library from "./Library"

const Drawer = createDrawerNavigator()

const DrawerScreen: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerType="back"
      minSwipeDistance={500}
      drawerContentOptions={{ activeTintColor: "#00ce3b" }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Top Songs" component={Charts} />
      <Drawer.Screen name="Library" component={Library} />
    </Drawer.Navigator>
  )
}

export default DrawerScreen
