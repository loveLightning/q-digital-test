import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'

import { authAxios } from 'src/axios'
import { Spinner } from 'src/components'
import { Stacks } from 'src/navigation'
import { MyBooksTypes } from 'src/types'

import { ListMyBooks } from './list-my-books'

export const MyBooks = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [myBooks, setMyBooks] = useState<MyBooksTypes>()

  const getMyBooks = async () => {
    try {
      setIsLoading(true)

      const { data } = await authAxios.get<MyBooksTypes>(
        `https://internsapi.public.osora.ru/api/book/list`,
      )

      if (data.status) {
        setMyBooks(data)
      }
    } catch (err) {
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getMyBooks()
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <SafeAreaView>
        {myBooks?.status && (
          <ListMyBooks
            listBooks={myBooks.data}
            getMyBooks={getMyBooks}
            navigateRoute={Stacks.MyBooks}
          />
        )}
      </SafeAreaView>
    </>
  )
}
