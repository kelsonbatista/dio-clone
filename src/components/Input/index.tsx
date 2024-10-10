import { Controller } from 'react-hook-form';
import { ErrorText, IconContainer, InputContainer, InputText } from './styles';
import { IInput } from './types';

function Input(props: IInput) {
  const { leftIcon, name, control, errorMessage, ...rest } = props;

  return (
    <>
      <InputContainer>
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputText {...field} {...rest} value={field.value || ""} />
          )}
        />
      </InputContainer>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  );
}

export default Input;
