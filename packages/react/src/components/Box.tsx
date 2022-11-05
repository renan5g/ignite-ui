import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles/styled'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '$borderWidths$thin solid $gray600',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}
