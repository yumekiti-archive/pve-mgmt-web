import React from "react";
import Twemoji from "react-twemoji";

type Props = {
  emoji: string;
  text: string;
  bold?: boolean;
  onClick: () => void;
};

const Component: React.FC<Props> = ({ emoji, text, bold = false, onClick }) => (
  <button
    className="flex items-center pr-4 py-2 w-full text-Elements-Headline rounded group hover:bg-Illustration-Highlight hover:bg-opacity-30 justify-start"
    onClick={onClick}
  >
    <div className="px-2 w-10 flex justify-center items-center">
      <Twemoji options={{ className: "twemoji" }}>
        <span>{emoji}</span>
      </Twemoji>
    </div>
    <p
      className={`whitespace-nowrap text-Elements-Headline group-hover:text-Illustration-Highlight group-hover:underline ${
        bold && "font-bold"
      }`}
    >
      {text}
    </p>
  </button>
);

export default Component;
