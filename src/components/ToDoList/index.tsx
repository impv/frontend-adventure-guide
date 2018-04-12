import * as React from 'react'

import styled from 'styled-components'

import AccordionList from '~/components/AccordionList'
import AccordionItem from '~/components/AccordionItem'

import ToDo from '~/types/ToDo'

export interface Props {
  /** やることのリスト */
  todos: ToDo[]
}

/** やることリスト */
export const ToDoList: React.SFC<Props> = ({ todos }) => (
  <AccordionList>
    {todos.map(todo => (
      <AccordionItem key={todo.summary} title={todo.summary}>
        <Description>{todo.description}</Description>
      </AccordionItem>
    ))}
  </AccordionList>
)

export default ToDoList

const Description = styled.div`
  // misc
  white-space: pre-line;
`
