import { useContext, useState } from "react";
import { useForm } from 'react-hook-form';

import { AuthContext } from "../context/AuthContext"; 

import { Container, H1, H2 } from "../styles/tw/global";

import Input from "../components/global/Input";
import Button from "../components/global/Button";
import CheckBox from "../components/global/CheckBox";
import A from "../components/global/A";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";

interface PropsSignIn {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<PropsSignIn>();
  const { signIn } = useContext(AuthContext);
  const [ remenber, setRemenber ] = useState<Boolean>(false);

  async function handleSignIn(data: PropsSignIn) {
    try {
      await signIn(data);
    } catch (error) {
      
    }
  }

  return (
    <Container>
      <H1>
        CoLiga E-Sports
      </H1>
      <H2>
        Login
      </H2>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <div className={`
          flex flex-col justify-between items-center
          m-5 p-5 bg-gray-800
        `}>
          <div className="mb-1">
            
              <Input 
                title="E-mail"
                type="email"
                name="email"
                autoComplete="email"
                required={true}
                register={register}
              />
              <Input 
                title="Senha" 
                type="password"
                name="password"
                autoComplete="current-password"
                required={true}
                register={register}
              />
            <div className={`
              mx-1 my-1
            `}>
              <CheckBox 
                text="Lembre-me"
                value={remenber}
                setValue={setRemenber}
              />
              <A
                path="/forgotpassword"
                className="float-right"
              >
                Esqueci a senha.
              </A>
              <A
                path="/register"
                className="text-center mt-5"
                br={true}
              >
                Registra-se
              </A>
            </div>
          </div>
          <Button 
            type='on'
            text='Login'
          />
          <Button 
            type='url'
            text='Voltar'
            href='/'
            color='gray'
          />
        </div>
      </form>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = parseCookies(ctx);

  if (token) {
    return {
      props: {},
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
