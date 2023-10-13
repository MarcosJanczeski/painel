export * from './light'
export * from './dark'

export type AppTheme = {
  title: string,
  primary: {
    fill: string,
    fillHover: string,
    text: string,
  },
  secondary: {
    fill: string,
    fillHover: string,
    text: string,
  },
  background: {
    divider: string,
    default: string,
    paper: string
  }
}
