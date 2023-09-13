import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const CloseIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}>
    <Path
      fill="#737373"
      d="m7.94 7 5.527-5.527a.667.667 0 0 0-.94-.94L7 6.06 1.473.527a.67.67 0 0 0-.946.946L6.06 7 .527 12.527a.667.667 0 1 0 .94.94L7 7.94l5.527 5.527a.667.667 0 0 0 .94-.94L7.94 7Z"
    />
  </Svg>
)
