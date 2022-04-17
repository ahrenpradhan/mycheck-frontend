import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer } from '@/Containers'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline'
          } else if (route.name === 'Invoices') {
            iconName = focused ? 'file-tray-full' : 'file-tray-full-outline'
          } else if (route.name === 'Settings') {
            iconName = focused ? 'md-settings-sharp' : 'md-settings-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
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
