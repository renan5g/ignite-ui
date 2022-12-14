import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles/styled'

export const Button = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',

  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',

  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  minWidth: 120,

  borderRadius: '$sm',
  cursor: 'pointer',

  transition: 'background-color 200ms, color 200ms',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$primary500',

        '&:not(:disabled):hover': {
          backgroundColor: '$primary400',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
      secondary: {
        color: '$primary400',
        border: '$borderWidths$thick solid $primary500',

        '&:not(:disabled):hover': {
          backgroundColor: '$primary500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },
    size: {
      sm: {
        padding: '0 $4',
        height: 36,
      },
      md: {
        padding: '0 $4',
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
