import {
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  media,
  opacity,
  radii,
  space,
  zIndices,
} from '@nix-ui/tokens'
import type * as Stitches from '@stitches/react'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
    opacity: 'opacity',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
    borderWidths,
    zIndices,
    opacity,
  },
  media,
})

export type CSS = Stitches.CSS<typeof config>
export type Theme = typeof theme
