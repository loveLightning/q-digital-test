import React from 'react'
import { FlatList } from 'react-native'

import { BooksTypes } from 'src/types'

import { BooksCard } from './books-card'

interface Props {
  listBooks: BooksTypes
}

export const ListBooks = ({ listBooks }: Props) => {
  return (
    <>
      <FlatList
        data={listBooks.items}
        renderItem={({ item, index }) => <BooksCard item={item} id={index} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </>
  )
}
