import { ComponentProps } from 'react'
import { styled } from '../styles/styled'

export const TextArea = styled('textarea', {
  backgroundColor: '$neutral800',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '$borderWidths$thick solid $neutral700',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$white',
  resize: 'vertical',
  minHeight: '$20',

  '&:focus': {
    outline: 0,
    borderColor: '$primary300',
  },

  '&:disabled': {
    opacity: '$medium',
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray300',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
