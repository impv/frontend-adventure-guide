import * as React from 'react'

import { Link } from 'react-router-dom'

import Button, { Props as ButtonProps } from '~/components/Button'

interface Props extends ButtonProps {
  /** 遷移先パス */
  to: string
}

/**
 * `<Button>`をreact-router-domの`<Link>`で囲ったもの
 */
export const LinkButton: React.SFC<Props> = props => (
  <Link to={props.to}>
    <Button {...props}>{props.children}</Button>
  </Link>
)

export default LinkButton
