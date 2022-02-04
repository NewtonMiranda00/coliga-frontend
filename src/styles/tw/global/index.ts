import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex h-screen flex-col 
  items-center justify-center py-2
  bg-gray-900 
  text-white text-sm font-sans
  overflow-hidden

  ss:text-base
`;

export const H1 = tw.h1`
  text-3xl
  ss:text-4xl
`;

export const H2 = tw.h2`
  underline
  ss:text-lg
`;

export const P = tw.p`
  
`;
