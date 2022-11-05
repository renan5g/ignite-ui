import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import * as S from './styles'

export interface CheckboxProps extends ComponentProps<typeof S.Container> {}

export function Checkbox({ ...rest }: CheckboxProps) {
  return (
    <S.Container {...rest}>
      <S.Indicator asChild>
        <Check weight="bold" />
      </S.Indicator>
    </S.Container>
  )
}
