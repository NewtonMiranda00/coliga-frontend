import { Container, H1, H2 } from "../styles/tw/global";

import Button from "../components/global/Button";

export default function Register() {
  return (
    <Container>
      <H1>CoLiga E-Sports</H1>
      <H2>Registro</H2>
      <div className="px-5 py-10 bg-gray-800">
        <Button 
          type='url'
          text='Voltar'
          href='/'
          color='gray'
          className={`w-[100px]`}
        />
      </div>
    </Container>
  );
}
