interface Props {
  title: String;
  type?: 'email' | 'text' | 'password';
  name?: string;
  autoComplete?: string;
  required?: boolean;
  register: Function;
}

export default function Input({ 
  title, type, name, autoComplete, required , register
}: Props) {
  return (
    <div className={`
      my-0.5
    `}>
      <label
        className={`
          my-1
        `}
      >
        {title}: <br />
      </label>
      <input 
        {...register(name)}
        type={type ?? 'text'} 
        className={`
          text-gray-700 focus:text-black
          px-2 py-1 
          rounded-sm
        `}
        name={name}
        autoComplete={autoComplete}
        required={required as boolean}
      />
    </div>
  );
}