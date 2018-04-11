declare module '~/config/purposes.yml' {
  import Purpose from '~/types/Purpose'

  export const purposes: Purpose[]
}

declare module '~/config/skills.yml' {
  import SkillDetail from '~/types/SkillDetail'

  export const skills: SkillDetail[]
}

declare module '~/config/todo.yml' {
  import ToDo from '~/types/ToDo'

  export const todos: ToDo[]
}
