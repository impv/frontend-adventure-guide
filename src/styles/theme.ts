export interface Theme {
  baseColor: string
  primaryColor: string
  secondaryColor: string
}

export interface Themed {
  theme?: Theme
}

export const theme: Theme = {
  baseColor: '#F8BA69',
  primaryColor: '#03D1AB',
  secondaryColor: '#4E1C81'
}
