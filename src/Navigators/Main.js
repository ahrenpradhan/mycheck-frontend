import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer } from '@/Containers'
import { BottomNavigation } from '@/Config'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // You can return any component that you like here!
          return (
            <Ionicons
              name={BottomNavigation.getImage(route.name, focused)}
              size={size}
              color={color}
            />
          )
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      {/* <Tab.Screen
        name="Home"
        component={ExampleContainer}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      /> */}
      <Tab.Screen
        name="Home"
        component={ExampleContainer}
        // options={{
        //   // tabBarIconStyle: { display: 'none' },
        //   // tabBarLabelPosition: 'beside-icon',
        // }}
      />
      <Tab.Screen
        name="Invoices"
        component={ExampleContainer}
        // options={{
        //   // tabBarIconStyle: { display: 'none' },
        //   // tabBarLabelPosition: 'beside-icon',
        // }}
      />
      <Tab.Screen
        name="Settings"
        component={ExampleContainer}
        // options={{
        //   // tabBarIconStyle: { display: 'none' },
        //   // tabBarLabelPosition: 'beside-icon',
        // }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
