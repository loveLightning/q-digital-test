import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { FavoriteBooksIcon, MyBooksIcon, SearchBooksIcon } from 'src/icons'

import { Stacks } from './routes'
import { FavoriteBooksStack, MyBooksStack, SearchBooksStack } from './stacks'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName={Stacks.SearchBooks}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#EEEEEE',
          },
        }}>
        <Tab.Screen
          name={Stacks.SearchBooks}
          options={{
            tabBarIcon: () => <SearchBooksIcon />,
            headerStyle: {
              backgroundColor: '#002538',
            },
          }}
          component={SearchBooksStack}
        />

        <Tab.Screen
          name={Stacks.MyBooks}
          options={{
            tabBarIcon: () => <MyBooksIcon />,
            headerStyle: {
              backgroundColor: '#002538',
            },
          }}
          component={MyBooksStack}
        />

        <Tab.Screen
          name={Stacks.FavoriteBooks}
          options={{
            tabBarIcon: () => <FavoriteBooksIcon />,
            headerStyle: {
              backgroundColor: '#002538',
            },
          }}
          component={FavoriteBooksStack}
        />
      </Tab.Navigator>
    </>
  )
}
