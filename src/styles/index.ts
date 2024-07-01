/* eslint-disable import/no-named-default */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { get } from 'lodash'

import { default as GlobalStyles } from './global'
import theme from './colors'

export const pxToRem = (pixels: number, baseline = 16): string =>
  `${pixels / baseline}rem`

export const getTheme =
  (themeProp: string) =>
  ({ theme }: any): string =>
    get(theme, themeProp)

export { GlobalStyles, theme }
