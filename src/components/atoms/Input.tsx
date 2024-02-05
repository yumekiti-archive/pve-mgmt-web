import { ChangeEvent, FC } from "react";

type Props = {
  text: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const Component: FC<Props> = ({ text, onChange, placeholder }) => {
  return (
    <input
      type="text"
      className="w-96 p-2 border-2 border-Illustration-Stroke rounded-md focus:outline-none focus:border-Elements-Button"
      placeholder={placeholder}
      onChange={onChange}
      value={text}
    />
  );
};

export default Component;
