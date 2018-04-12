import * as React from 'react'

import { connect, MapStateToProps } from 'react-redux'

import { RootState } from '~/store'

interface MapProps {
  label: string
}

interface Props {
  skill: string
}

const mapStateToProps: MapStateToProps<MapProps, Props, RootState> = (
  state,
  props
) => ({
  label: state.skillDetail.details.find(s => s.name === props.skill).label
})

export default connect<MapProps, {}, Props>(mapStateToProps)(({ label }) => (
  <span>{label}</span>
))
