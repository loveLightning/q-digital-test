import { useLayoutEffect } from 'react'
import { Text } from 'react-native'

import { Header, MyBooks } from 'src/components'
import { useNavigation } from 'src/navigation'

export const MyBooksScreen = () => {
  const { setOptions } = useNavigation()
  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <Header>
          <Text className="font-bold text-white mr-[170px] text-[16px]">
            Library
          </Text>
        </Header>
      ),
    })
  }, [setOptions])

  return <MyBooks />
}
