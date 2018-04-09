declare module '~/config/purposes.yml' {
  interface Requirement {
    ability: string
    level: number
  }

  interface Purpose {
    purpose: string
    requires: Requirement[]
  }

  export const purposes: Purpose[]
}

declare module '~/config/abilities.yml' {
  interface Ability {
    name: string
    displayName: string
  }

  export const abilities: Ability[]
}
