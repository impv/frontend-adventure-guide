import * as React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

import Button, { Props as ButtonProps } from '~/components/Button'

const StyledLink = styled(Link)`
  // misc
  text-decoration: none;
`

interface Props extends ButtonProps {
  /** 遷移先パス */
  to: string
}

/**
 * `<Button>`をreact-router-domの`<Link>`で囲ったもの
 */
export const LinkButton: React.SFC<Props> = props =>
  props.disabled ? (
    <Button {...props}>{props.children}</Button>
  ) : (
    <StyledLink to={props.to}>
      <Button {...props}>{props.children}</Button>
    </StyledLink>
  )

export default LinkButton
