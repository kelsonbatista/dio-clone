import React from 'react';
import { NameText, Progress, UserInfoContainer, UserPicture } from './styles';

function UserInfo(props) {
  const { nome, imagem, percentual } = props;

  return (
    <UserInfoContainer>
      <UserPicture src={imagem} alt={nome} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </UserInfoContainer>
  );
}

export default UserInfo;
