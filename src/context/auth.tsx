import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { IUser } from '../types/user';
import { IAuthContext, IAuthContextProviderProps, ILoginData } from './types';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/feed");
  };

  const handleLogin = async (loginData: ILoginData) => {
    try {
      const response = await api.get(
        `/users?email=${loginData.email}&password=${loginData.password}`
      );

      if (response.data.length > 0) {
        setUser(response.data[0]);
        handleClickLogin();
        setError('');
      } else {
        setError("Email ou senha inválidos");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}