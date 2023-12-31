import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const WarningIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm7.133.513a.867.867 0 1 0 1.734 0v-4a.867.867 0 0 0-1.734 0v4ZM8 14.667A6.667 6.667 0 1 1 8 1.333a6.667 6.667 0 0 1 0 13.334Zm.967-3.32a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
