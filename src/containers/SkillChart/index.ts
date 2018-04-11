import * as React from 'react'
import { connect, MapStateToProps } from 'react-redux'

import SkillChart, { Props } from '~/components/SkillChart'

import { RootState } from '~/store'

type MapProps = Partial<Props>

const mapStateToProps: MapStateToProps<MapProps, Props, RootState> = state => ({
  requiredSkills: state.purpose.requirements,
  skillDetails: state.skillDetail.details
})

export default connect<MapProps>(mapStateToProps)(SkillChart)
