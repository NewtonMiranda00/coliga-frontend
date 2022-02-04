import { AxiosResponse } from "axios";
import Router from "next/router";
import { createContext, ReactElement, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { api } from '../services';

interface PropsSignIn {
  email: string;
  password: string;
}

interface PropsAuthContext {
  isAuthenticated: boolean;
  user: any;
  signIn: (data: PropsSignIn) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext({} as PropsAuthContext); 

interface PropsAuthProvider {
  children: ReactElement;
}

export function AuthProvider({ children }: PropsAuthProvider) {
  const [ user, setUser ] = useState<any | null>(null);
  
  const isAuthenticated = !!user;

  useEffect(() => {
    const { token } = parseCookies();

    if (token) {
      api.get('/user', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        setUser(response.data.user);
      });
    }
  }, []);

  async function signIn({ email, password }: PropsSignIn) {
    const { data: { user, token } }: AxiosResponse = await api.post(
      '/auth/authenticate', 
      {
        email, 
        password 
      }
    );

    setCookie(undefined, 'token', token, {
      maxAge: 60 * 60 * 24, // 24 hours
    });

    api.defaults.headers.authorization = `Bearer ${token}`;

    setUser(user);

    Router.push('/dashboard');
  }

  async function logout() {
    destroyCookie(undefined, 'token');

    api.defaults.headers.authorization = undefined;

    Router.push('/');
  }
  
  return (
    <AuthContext.Provider 
      value={{
        user,
        isAuthenticated,
        signIn,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}