import React from 'react';
import { IconContainer, InputContainer, InputText } from './styles';

function Input(props) {
  const { leftIcon, name, ...rest } = props;

  return (
    <InputContainer>
      {leftIcon && (<IconContainer>{leftIcon}</IconContainer>)}
      <InputText {...rest} />
    </InputContainer>
  );
}

export default Input;
