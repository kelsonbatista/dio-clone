import React from 'react';
import { ButtonContainer } from './styles';

function Button(props) {
  const { title, $variant="primary", onClick } = props

  return (
    <ButtonContainer $variant={$variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}

export default Button;
