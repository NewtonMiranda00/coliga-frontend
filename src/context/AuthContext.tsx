import { createContext, ReactElement } from "react";
import { api } from '../services';

interface PropsAuthContext {
  isAuthenticated: boolean
}

export const AuthContext = createContext({} as PropsAuthContext); 

interface PropsAuthProvider {
  children: ReactElement;
}

interface PropsSignIn {
  email: string;
  password: string;
}

export function AuthProvider({ children }: PropsAuthProvider) {
  const isAuthenticated = false;

  async function signIn({ email, password }: PropsSignIn) {
    const {  } = await api.post(
      '/auth/authenticate', 
      {
        email, 
        password 
      }
    );
  }

  return (
    <AuthContext.Provider 
      value={{
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}