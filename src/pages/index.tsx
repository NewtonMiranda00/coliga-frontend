import { Container, H1, H2 } from '../styles/tw/global';

import Tournament from '../components/Tournament';
import Button from '../components/global/Button';

import { PropsTournament } from '../interfaces';

import '../services';

export default function Home() {
  const Tournaments = [
    {
      name: 'League Of Legends',
      UrlTag: 'league-of-legends'
    }
  ];

  function renderItems(items: PropsTournament[]) {
    const render = [];

    for (let i = 0;i < items.length;i++) render.push(
      <Tournament 
        key={i}
        name={items[i].name}
        UrlTag={items[i].UrlTag}
      />
    );

    return render;
  }

  return (
    <Container>
      <H1>CoLiga E-Sports</H1>
      <H2>Hub de Campeonatos</H2>

      <div className={`flex m-5`}>
        {renderItems(Tournaments)}
      </div>

      <div className={`
        flex flex-col justify-center items-center
        w-32

        ss:w-40
      `}>
        <Button 
          type='url'
          text='Login'
          href='/login'
          className='rounded'
        />    

        <Button 
          type='url'
          text='Registrar'
          href='/register'
          className='rounded'
        />
      </div>
    </Container>
  );
}
