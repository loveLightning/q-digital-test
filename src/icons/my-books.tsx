import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const MyBooksIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={28}
    fill="none"
    {...props}>
    <Path
      fill="#5C426C"
      fillRule="evenodd"
      d="M4 24h6v4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h12.828L24 7.172V14h-4v-4h-6V4H4v20Z"
      clipRule="evenodd"
    />
    <Path
      fill="#5C426C"
      fillRule="evenodd"
      d="M24 24H12v-4h12v4Z"
      clipRule="evenodd"
    />
    <Path
      fill="#5C426C"
      fillRule="evenodd"
      d="M16 28V16h4v12h-4Z"
      clipRule="evenodd"
    />
  </Svg>
)
