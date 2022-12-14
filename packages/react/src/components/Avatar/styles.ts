import { styled } from '../../styles/styled'

import * as Avatar from '@radix-ui/react-avatar'

export const Container = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$12',
  height: '$12',
  overflow: 'hidden',
})

export const Image = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const Fallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$neutral800',
  color: '$gray100',

  svg: {
    width: '$6',
    height: '$6',
  },
})
