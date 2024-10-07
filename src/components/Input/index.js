import React from 'react';
import { Controller } from 'react-hook-form';
import { IconContainer, InputContainer, InputText } from './styles';

function Input(props) {
  const { leftIcon, name, control, ...rest } = props;

  return (
    <InputContainer>
      {leftIcon && (<IconContainer>{leftIcon}</IconContainer>)}
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <InputText {...field} {...rest} value={field.value || ''} />} />
    </InputContainer>
  );
}

export default Input;
