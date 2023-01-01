import { ComponentProps } from 'react'
import * as S from './styles'

export interface TextInputProps extends ComponentProps<typeof S.Input> {
  prefix?: string
}

export function TextInput({ prefix, ...rest }: TextInputProps) {
  return (
    <S.Container>
      {!!prefix && <S.Prefix>{prefix}</S.Prefix>}

      <S.Input {...rest} />
    </S.Container>
  )
}

TextInput.displayName = 'TextInput'
