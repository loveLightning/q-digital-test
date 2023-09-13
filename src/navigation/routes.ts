import type { ParamListBase, RouteProp } from '@react-navigation/native'
import { useNavigation as useNativeNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

export enum Navigators {
  Main = 'Main',
}

export enum Screens {
  SearchBooks = 'SearchBooksScreen',
  MyBooks = 'MyBooksScreen',
  FavoriteBooks = 'FavoriteBooksScreen',
  Registration = 'RegistrationScreen',
  Login = 'LoginScreen',
  BookDesc = 'BookDescScreen',
}

export enum Stacks {
  SearchBooks = 'SearchBooksStack',
  MyBooks = 'MyBooksStack',
  FavoriteBooks = 'FavoriteBooksStack',
  Authorization = 'AuthorizationStack',
}

type Routes = Navigators | Screens | Stacks

export const useNavigation = () =>
  useNativeNavigation<NativeStackNavigationProp<ParamListBase, Routes>>()

interface WithBookDesc {
  title: string
  desc: string
  authors: string[] | string
}

type RootStackParamList = { BookDesc: WithBookDesc }

export type BookDescProp = RouteProp<RootStackParamList, 'BookDesc'>
