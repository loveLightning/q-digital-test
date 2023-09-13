import { useLayoutEffect } from 'react'
import { Text } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { BookDesc, Header } from 'src/components'
import { useNavigation } from 'src/navigation'
import { BookDescProp } from 'src/navigation/routes'

export const BookDescScreen = () => {
  const { setOptions } = useNavigation()
  const {
    params: { authors, desc, title },
  } = useRoute<BookDescProp>()

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <Header>
          <Text className="font-bold text-white mr-[170px] text-[16px]">
            Library - Info
          </Text>
        </Header>
      ),
    })
  }, [setOptions])

  return <BookDesc authors={authors} desc={desc} title={title} />
}
