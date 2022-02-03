import { Container, H1, H2 } from "../../styles/tw/global";

import Button from "../../components/global/Button";

export default function LoL() {
  return (
    <Container>
      <H1>Campeonatos</H1>
      <H2>League Of Legends</H2>
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
