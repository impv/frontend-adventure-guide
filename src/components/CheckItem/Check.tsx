import * as React from 'react'

import styled from 'styled-components'

import { Themed } from '~/styles/theme'

type SVGProps = Themed & Props

const strokeLength = 50

const SVG = styled.svg`
  fill: ${({ theme }: SVGProps) => theme.primaryColor};
  width: ${({ theme }: SVGProps) => theme.fontSize + 1}px;
  height: ${({ theme }: SVGProps) => theme.fontSize + 1}px;

  transition: stroke-dashoffset 0.2s ease;
  stroke: ${({ theme }) => theme.primaryColor};
  stroke-dasharray: ${strokeLength};
  stroke-dashoffset: ${({ checked }: SVGProps) => (checked ? 0 : strokeLength)};
  stroke-width: 2.5px;
  fill-opacity: 0;
`

interface Props {
  checked: boolean
}

const Check: React.SFC<Props> = ({ checked }) => (
  <SVG
    checked={checked}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="svg4148"
    viewBox="0 0 20.999999 20.999999"
    height="21"
    width="21"
  >
    <defs id="defs4150" />
    <g transform="translate(0,-1031.3622)" id="layer1">
      <path
        id="path4146"
        d="m 1.3766436,1042.3149 7.3855898,8.0974 10.7669506,-18.0635"
      />
    </g>
  </SVG>
)

export default Check
