interface Props {
  text: String;
  value: Boolean;
  setValue: Function;
}

export default function CheckBox({ text, value, setValue }: Props) {
  return (
    <div 
      className="cursor-pointer float-left"
      onClick={() => {
        setValue(!value);
      }}
    >
      <label className="underline cursor-pointer">
        {text}
      </label>
      <input 
        checked={!!value}
        onChange={(element) => setValue(element.target.checked)}
        className="mx-1.5"
        type="checkbox"

      />
    </div>
  );
}
