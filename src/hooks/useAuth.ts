import { useContext } from 'react';
import { AuthContext } from '../context/auth';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Não existe um contexto de autenticação.');
  }

  return context;
}

export default useAuth
