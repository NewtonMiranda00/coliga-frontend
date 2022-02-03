import Button from './global/Button';
import { PropsTournament } from '../interfaces';

export default function Tournament({ name, UrlTag }: PropsTournament) {
  return (
    <div className={`
      flex flex-col justify-center items-center
      w-56 p-2.5 rounded-md bg-gray-800
      mx-2.5 my-4 
      ss:w-72 ss:p-3.5
    `}>
      <div className={`
        mx-4 my-5 
        max-w-[228px] max-h-[85px]
      `}>
        <img 
          src={`
            /logos/logo-${
              name.toLowerCase().split(' ').join('-')
            }.png
          `}
          alt={`Logo ${name}`}
        />
      </div>
      <Button 
        type='url'
        text='Ver campeonatos'
        href={`/tournaments/${UrlTag}`}
      />   
    </div>
  );
}
