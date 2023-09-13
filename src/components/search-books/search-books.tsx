import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView, TouchableOpacity, View } from 'react-native'

import { publicAxios } from 'src/axios'
import { Header, Input } from 'src/components'
import { useDebounce } from 'src/hooks'
import { ClearSearchIcon, SearchIcon } from 'src/icons'
import { useNavigation } from 'src/navigation'
import { BooksTypes } from 'src/types/books-types'

import { ListBooks } from './list-books'

export const SearchBooks = () => {
  const { setOptions } = useNavigation()
  const [inputValue, setInputValue] = useState('')
  const [listBooks, setListBooks] = useState<BooksTypes>()

  const searchInputQuery = useDebounce(inputValue, 1000)

  const getBooksByQuery = useCallback(async () => {
    try {
      const { data } = await publicAxios.get<BooksTypes>(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInputQuery}`,
      )

      setListBooks(data)
    } catch { }
  }, [searchInputQuery])

  useEffect(() => {
    getBooksByQuery()
  }, [getBooksByQuery, searchInputQuery])

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <Header>
          <Input
            placeholder="Search..."
            onChangeText={(val) => setInputValue(val)}
            value={inputValue}
            defaultValue={inputValue}
            style={{
              backgroundColor: 'white',
              width: '100%',
              paddingLeft: 40,
              paddingRight: 30,
              fontSize: 19,
              paddingTop: 0,
              paddingBottom: 0,
              height: 36,
            }}
            componentsLeft={
              <View
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  left: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <SearchIcon />
              </View>
            }
            componentsRight={
              <TouchableOpacity
                onPress={() => setInputValue('')}
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  right: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <ClearSearchIcon />
              </TouchableOpacity>
            }
          />
        </Header>
      ),
    })
  }, [inputValue, setOptions])

  return (
    <SafeAreaView>
      {listBooks && <ListBooks listBooks={listBooks} />}
    </SafeAreaView>
  )
}
