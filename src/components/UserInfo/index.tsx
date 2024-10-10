import { NameText, Progress, UserInfoContainer, UserPicture } from './styles';
import { IUserInfo } from './types';

function UserInfo(props: IUserInfo) {
  const { nome, imagem, $percentual } = props;

  return (
    <UserInfoContainer>
      <UserPicture src={imagem} alt={nome} />
      <div>
        <NameText>{nome}</NameText>
        <Progress $percentual={$percentual} />
      </div>
    </UserInfoContainer>
  );
}

export default UserInfo;
