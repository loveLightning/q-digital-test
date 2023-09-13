import React from 'react'
import Svg, { G, Mask, Path, SvgProps } from 'react-native-svg'

export const ClearSearchIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8 15.111A7.111 7.111 0 1 1 8 .89 7.111 7.111 0 0 1 8 15.11ZM8 1.778a6.222 6.222 0 1 0 0 12.444A6.222 6.222 0 0 0 8 1.778Zm2.876 4.062L8.716 8l2.097 2.084a.445.445 0 0 1-.626.627L8.08 8.604l-2.12 2.12a.444.444 0 1 1-.627-.626L7.458 8l-2.17-2.196a.444.444 0 0 1 .628-.626L8.089 7.35l2.16-2.138a.444.444 0 0 1 .627.627Z"
      clipRule="evenodd"
    />
    <Mask
      id="a"
      width={16}
      height={16}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M8 15.111A7.111 7.111 0 1 1 8 .89 7.111 7.111 0 0 1 8 15.11ZM8 1.778a6.222 6.222 0 1 0 0 12.444A6.222 6.222 0 0 0 8 1.778Zm2.876 4.062L8.716 8l2.097 2.084a.445.445 0 0 1-.626.627L8.08 8.604l-2.12 2.12a.444.444 0 1 1-.627-.626L7.458 8l-2.17-2.196a.444.444 0 0 1 .628-.626L8.089 7.35l2.16-2.138a.444.444 0 0 1 .627.627Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#737373" d="M0 0h16v16H0z" />
    </G>
  </Svg>
)
