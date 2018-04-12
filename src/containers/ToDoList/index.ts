import { connect, MapStateToProps } from 'react-redux'

import ToDoList, { Props as ToDoListProps } from '~/components/ToDoList'

import { RootState } from '~/store'

import { todos } from '~/config/todo.yml'

type MapProps = Partial<ToDoListProps>

type Props = {
  skill: string
}

const mapStateToProps: MapStateToProps<MapProps, Props, RootState> = (
  state,
  props
) => ({
  todos: todos.filter(
    todo =>
      todo.skill === props.skill &&
      todo.level <=
        state.purpose.requirements.find(r => r.skill === props.skill).level
  )
})

export default connect<MapProps, {}, Props>(mapStateToProps)(ToDoList)
