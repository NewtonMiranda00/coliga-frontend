import Link from 'next/link';

type colors = 
  'red' | 'green' | 'gray' | undefined;

interface Props {
  type: 'url' | 'on'
  text: String
  color?: colors
  href?: String
  onClick?: () => void
}

export default function Button(props: Props) {
  const { type, text, color, href, onClick  } = props;

  function renderColor(color: colors): String {
    switch (color) {
      case 'green':
        return 'bg-green-500 hover:bg-green-700'

      case 'gray':
        return 'bg-gray-500 hover:bg-gray-700'
    
      default:
        return 'bg-red-500 hover:bg-red-700'
    }
  }

  return (
    type === 'url' ? (
      <Link href={href as string}>
        <button className={`
          w-full
          m-1.5 p-3 rounded-sm shadow-lg
          ${renderColor(color)}
          transition duration-500

          ss:m-2 ss:p-3.5 
        `}>
          {text}
        </button>
      </Link>
    ) : (
      <button 
        className={`
          w-full
          m-2 p-3 rounded-sm shadow-lg
          ${renderColor(color)} 
          transition duration-500

          ss:m-2 ss:p-3.5
        `}
        onClick={onClick}
      >
        {text}
      </button>
    )
  );
}