declare module '~/config/purposes.yml' {
  import Purpose from '~/types/Purpose'

  export const purposes: Purpose[]
}

declare module '~/config/skills.yml' {
  import SkillDetail from '~/types/SkillDetail'

  export const skills: SkillDetail[]
}

declare module '~/config/todo.yml' {
  interface ToDo {
    summary: string
    detail: string
  }

  interface Level {
    level: string
    todos: ToDo[]
  }

  interface Ability {
    ability: string
    levels: Level[]
  }

  export const todo: Ability[]
}
