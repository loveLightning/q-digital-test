import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SearchBooksScreen } from 'src/screens/search-books-screen'

import { Screens } from '../routes'

const SearchBooks = createNativeStackNavigator()

export const SearchBooksStack = () => {
  return (
    <SearchBooks.Navigator initialRouteName={Screens.SearchBooks}>
      <SearchBooks.Screen
        name={Screens.SearchBooks}
        options={{ headerShown: true }}
        component={SearchBooksScreen}
      />
    </SearchBooks.Navigator>
  )
}
