import * as React from 'react'

import { RouteComponentProps, withRouter } from 'react-router-dom'

import Button, { Props as ButtonProps } from '~/components/Button'

export interface Props extends ButtonProps, RouteComponentProps<any> {}

/**
 * 戻るボタン
 */
export const BackButton: React.SFC<Props> = props =>
  props.disabled ? (
    <Button {...props}>{props.children}</Button>
  ) : (
    <Button onClick={() => props.history.goBack()} {...props}>
      {props.children}
    </Button>
  )

export default withRouter(BackButton)
