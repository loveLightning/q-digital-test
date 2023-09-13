import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const SearchBooksIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={29}
    fill="none"
    {...props}>
    <Path
      fill="#5C426C"
      fillRule="evenodd"
      d="M25 24.857C25 27.145 23.134 29 20.833 29H4.167C1.865 29 0 27.145 0 24.857V4.143C0 1.855 1.865 0 4.167 0H17.53L25 7.428v17.43Zm-4.167 0v-14.5h-6.25V4.143H4.167v20.714h16.666Z"
      clipRule="evenodd"
    />
    <Path
      fill="#5C426C"
      fillRule="evenodd"
      d="M8 8H3V6h5v2ZM9 11H3V9h6v2Z"
      clipRule="evenodd"
    />
  </Svg>
)
