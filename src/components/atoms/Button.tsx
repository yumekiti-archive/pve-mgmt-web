import { FC } from "react";

type Props = {
  onClick?: () => void;
  text: string;
};

const Component: FC<Props> = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="text-Elements-Headline bg-Elements-CardBackground text-white py-2 px-4 rounded-md border-2 border-Illustration-Stroke hover:bg-Elements-Button hover:text-Elements-ButtonText"
    >
      {text}
    </button>
  );
};

export default Component;
