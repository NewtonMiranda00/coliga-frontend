import Link from "next/link";

interface Props {
  children: String;
  path: string;
  br?: Boolean;
  className?: string;
}

export default function A({ children, path, br, className }: Props) {
  return (
    <>
      { br ? <br />: false }
      <Link href={path}>
        <label className={
          "underline text-center cursor-pointer block " + className + (br ? ' w-full' : '')
        }>
          {children}
        </label>
      </Link>
    </>
  );
}
