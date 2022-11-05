import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import * as S from './styles'

export interface AvatarProps extends ComponentProps<typeof S.Image> {}

export function Avatar({ ...rest }: AvatarProps) {
  return (
    <S.Container>
      <S.Image {...rest} />

      <S.Fallback delayMs={600}>
        <User />
      </S.Fallback>
    </S.Container>
  )
}
