import { red, grayDark } from '@radix-ui/colors'
import { createCss } from '@stitches/react'

export const { getCssString, styled, global } = createCss({
  theme: {
    colors: {
      hiContrast: grayDark.gray11,
      lowContrast: grayDark.gray12,

      ...red,
      ...grayDark
    }
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)'
  }
})
