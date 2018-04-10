declare module '~/config/purposes.yml' {
  import Purpose from '~/types/Purpose'

  export const purposes: Purpose[]
}

declare module '~/config/abilities.yml' {
  interface Ability {
    name: string
    displayName: string
  }

  export const abilities: Ability[]
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
