import * as React from 'react'

import styled from 'styled-components'

import { Themed } from '~/styles/theme'

type Props = Themed

const SVG = styled.svg`
  fill: ${({ theme }: Props) => theme.primaryColor};
  width: ${({ theme }: Props) => theme.fontSize + 1}px;
  height: ${({ theme }: Props) => theme.fontSize + 1}px;
`

const Check: React.SFC = () => (
  <SVG
    viewBox="0 0 21 21"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g id="Canvas" transform="translate(1161 257)">
      <g id="Vector">
        <use xlinkHref="#path0_stroke" transform="translate(-1159.5 -256)" />
      </g>
    </g>
    <defs>
      <path
        id="path0_stroke"
        d="M 7.28571 18L 6.54047 18.6668L 7.44849 19.6816L 8.14501 18.5115L 7.28571 18ZM -0.745241 10.5239L 6.54047 18.6668L 8.03096 17.3332L 0.745241 9.19035L -0.745241 10.5239ZM 8.14501 18.5115L 18.8593 0.511484L 17.1407 -0.511484L 6.42642 17.4885L 8.14501 18.5115Z"
      />
    </defs>
  </SVG>
)

export default Check
