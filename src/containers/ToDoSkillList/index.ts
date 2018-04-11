import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'

import { push } from 'react-router-redux'

import ToDoSkillList, { Props } from '~/components/ToDoSkillList'

import SkillDetail from '~/types/SkillDetail'

import { RootState } from '~/store'

type MapProps = Partial<Props>

const mapStateToProps: MapStateToProps<MapProps, Props, RootState> = state => ({
  skills: state.purpose.requirements
    .filter(skill => skill.level > 0)
    .map<SkillDetail>(skill =>
      state.skillDetail.details.find(detail => detail.name === skill.skill)
    )
})

const mapDispatchToProps: MapDispatchToProps<MapProps, Props> = dispatch => ({
  onSelect: skill => dispatch(push(`/todo/${skill.name}`))
})

export default connect<MapProps>(mapStateToProps, mapDispatchToProps)(
  ToDoSkillList
)
