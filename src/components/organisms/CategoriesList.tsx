import React from "react";

import LinkButton from "../atoms/LinkButton";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../features/search";

type Props = {
  title?: string;
  list: {
    value: string;
    emoji: string;
    text: string;
    bold: boolean;
  }[];
};

const Component: React.FC<Props> = ({ title, list }) => {
  const dispatch = useDispatch();

  const handleSearch = (value: string) => {
    dispatch(setSearchValue(value));
  };

  return (
    <nav className="py-2">
      {title && <h2 className="text-Headline font-bold p-2">{title}</h2>}
      <ul>
        {list.map((item, index) => (
          <li key={index} className="flex items-center">
            <LinkButton
              emoji={item.emoji}
              text={item.text}
              bold={item.bold}
              onClick={() => handleSearch(item.value)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Component;
