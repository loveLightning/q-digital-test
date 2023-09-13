import React from 'react'
import Svg, { G, Mask, Path, SvgProps } from 'react-native-svg'

export const SearchIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M9.22.333a8.667 8.667 0 1 0 0 17.334 8.667 8.667 0 0 0 0-17.334Zm0 1.367A7.3 7.3 0 1 1 1.927 9 7.333 7.333 0 0 1 9.22 1.7Zm7.533 13.88 4.914 4.947a.667.667 0 0 1-.947.94l-4.913-4.947.946-.94Z"
      clipRule="evenodd"
    />
    <Mask
      id="a"
      width={22}
      height={22}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M9.22.333a8.667 8.667 0 1 0 0 17.334 8.667 8.667 0 0 0 0-17.334Zm0 1.367A7.3 7.3 0 1 1 1.927 9 7.333 7.333 0 0 1 9.22 1.7Zm7.533 13.88 4.914 4.947a.667.667 0 0 1-.947.94l-4.913-4.947.946-.94Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#0079B8" d="M-1-1h24v24H-1z" />
    </G>
  </Svg>
)
