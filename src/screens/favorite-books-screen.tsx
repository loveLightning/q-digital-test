import { useLayoutEffect } from 'react'
import { Text } from 'react-native'

import { FavoriteBooks, Header } from 'src/components'
import { useNavigation } from 'src/navigation'

export const FavoriteBooksScreen = () => {
  const { setOptions } = useNavigation()
  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <Header>
          <Text className="font-bold text-white mr-[170px] text-[16px]">
            Library - Favorite
          </Text>
        </Header>
      ),
    })
  }, [setOptions])

  return <FavoriteBooks />
}
