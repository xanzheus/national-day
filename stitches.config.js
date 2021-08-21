import { red, gray } from '@radix-ui/colors'
import { createCss } from '@stitches/react'

export const { getCssString, styled, global } = createCss({
  theme: {
    colors: {
      hiContrast: gray.gray11,
      lowContrast: gray.gray12,

      ...red,
      ...gray
    }
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)'
  }
})
