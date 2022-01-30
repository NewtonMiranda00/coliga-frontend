import Head from 'next/head';
import Tournament from '../components/Tournament';
import { PropsTournament } from '../interfaces';

export default function Home() {
  const Tournaments = [
    {
      name: 'League Of Legends',
      UrlTag: 'lol'
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
    <div className={`
      flex min-h-screen flex-col 
      items-center justify-center py-2
      bg-gray-900 
      text-white text-sm
      overflow-hidden
      
      ss:text-base 
    `}>
      <Head>
        <title>Cup Legends Online</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      
      <div className={`flex`}>
        {renderItems(Tournaments)}
      </div>
    </div>
  )
}
