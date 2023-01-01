import { ComponentProps, ElementType } from 'react'
import { themeProp } from '../styles/helpers'
import { styled } from '../styles/styled'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',

  margin: 0,

  color: '$gray100',

  variants: {
    ...themeProp('size', 'fontSizes', (value) => ({
      fontSize: value,
    })),
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'
