import { ButtonContainer } from './styles';
import IButton from './types';

function Button(props: IButton) {
  const { title, $variant="primary", onClick } = props;

  return (
    <ButtonContainer $variant={$variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}

export default Button;
