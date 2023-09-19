import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import { authAxios } from 'src/axios'
import { ListMyBooks, Spinner } from 'src/components'
import { Stacks } from 'src/navigation'
import { MyBooksTypes, MyBookTypes } from 'src/types'

export const FavoriteBooks = () => {
  const isFocused = useIsFocused()

  const [isLoading, setIsLoading] = useState(false)
  const [myBooks, setMyBooks] = useState<MyBookTypes[]>()

  const getMyBooks = async () => {
    try {
      setIsLoading(true)

      const { data } = await authAxios.get<MyBooksTypes>(
        `https://internsapi.public.osora.ru/api/book/list`,
      )

      if (data.status) {
        const fileteredFavoriteBooks = data.data.filter((el) => {
          return el.favorite === 1
        })
        setMyBooks(fileteredFavoriteBooks)
      }
    } catch (err) {
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getMyBooks()
  }, [isFocused])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <SafeAreaView>
        {myBooks?.length && (
          <ListMyBooks
            listBooks={myBooks}
            getMyBooks={getMyBooks}
            navigateRoute={Stacks.FavoriteBooks}
          />
        )}
      </SafeAreaView>
    </>
  )
}
