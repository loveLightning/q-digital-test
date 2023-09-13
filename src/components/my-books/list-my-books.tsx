import { FlatList } from 'react-native'

import { Stacks } from 'src/navigation'
import { MyBookTypes } from 'src/types'

import { MyBookCard } from './my-book-card'

interface Props {
  listBooks: MyBookTypes[]
  getMyBooks: () => void
  navigateRoute: Stacks
}

export const ListMyBooks = ({
  listBooks,
  getMyBooks,
  navigateRoute,
}: Props) => {
  return (
    <>
      <FlatList
        data={listBooks}
        renderItem={({ item, index }) => (
          <MyBookCard
            item={item}
            id={index}
            getMyBooks={getMyBooks}
            navigateRoute={navigateRoute}
          />
        )}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </>
  )
}
