import { GetServerSideProps } from "next";
import { useContext } from "react";
import { parseCookies } from "nookies";

import { Container, H1, H2 } from "../styles/tw/global";

import Button from "../components/global/Button";

import { AuthContext } from "../context/AuthContext";
import { getAPIClient } from "../services/axios";

export default function User() {
  const { user, logout } = useContext(AuthContext);

  // useEffect(() => {
  //   async function getUser() {
  //     if (api.defaults.headers.authorization) {
  //       const { data } = await api.get('/user');

  //       console.log(data);
  //     }
  //   }

  //   getUser();
  // }, []);

  return (
    <Container>
      <H1>
        CoLiga E-Sports
      </H1>
      <H2>
        Dashboard
      </H2>
      <div className="px-5 py-10 bg-gray-800">
        <Button 
          type='on'
          text='Logout'
          onClick={logout}
          color='gray'
          className={` w-[120px] ss:w-[200px]`}
        />
      </div>
    </Container>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { token } = parseCookies(ctx);

  if (!token) {
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  console.log(await apiClient.get('/user'));

  return {
    props: {}
  }
}
