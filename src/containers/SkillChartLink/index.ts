import * as React from 'react'
import { connect, MapStateToProps } from 'react-redux'

import LinkButton, { Props } from '~/components/LinkButton'

import { RootState } from '~/store'

interface MapProps {
  disabled?: boolean
}

const mapStateToProps: MapStateToProps<MapProps, Props, RootState> = state => ({
  disabled: state.purpose.purposes.filter(p => p.selected).length === 0
})

export default connect<MapProps>(mapStateToProps)(LinkButton)
