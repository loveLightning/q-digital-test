import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { BookDescScreen } from 'src/screens'
import { FavoriteBooksScreen } from 'src/screens/favorite-books-screen'

import { Screens } from '../routes'

const FavoriteBooks = createNativeStackNavigator()

export const FavoriteBooksStack = () => {
  return (
    <FavoriteBooks.Navigator initialRouteName={Screens.FavoriteBooks}>
      <FavoriteBooks.Screen
        name={Screens.FavoriteBooks}
        options={{ headerShown: true }}
        component={FavoriteBooksScreen}
      />
      <FavoriteBooks.Screen
        name={Screens.BookDesc}
        options={{ headerShown: true }}
        component={BookDescScreen}
      />
    </FavoriteBooks.Navigator>
  )
}
