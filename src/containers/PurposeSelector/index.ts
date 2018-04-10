import * as React from 'react'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'

import PurposeSelector, { Props } from '~/components/PurposeSelector'

import { toggleSelect } from '~/store/modules/purpose'

import { RootState } from '~/store'
import { SelectablePurpose } from '~/types/Purpose'

type MapProps = Partial<Props>

const mapStateToProps: MapStateToProps<MapProps, Props, RootState> = state => ({
  purposes: state.purpose.purposes
})

const mapDispatchToProps: MapDispatchToProps<MapProps, Props> = dispatch => ({
  onSelect: description => dispatch(toggleSelect(description))
})

export default connect<MapProps>(mapStateToProps, mapDispatchToProps)(
  PurposeSelector
)
