import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { BookDescScreen } from 'src/screens'
import { MyBooksScreen } from 'src/screens/my-books-screen'

import { Screens } from '../routes'

const MyBooks = createNativeStackNavigator()

export const MyBooksStack = () => {
  return (
    <MyBooks.Navigator initialRouteName={Screens.MyBooks}>
      <MyBooks.Screen
        name={Screens.MyBooks}
        options={{ headerShown: true }}
        component={MyBooksScreen}
      />
      <MyBooks.Screen
        name={Screens.BookDesc}
        options={{ headerShown: true }}
        component={BookDescScreen}
      />
    </MyBooks.Navigator>
  )
}
