import { ReactNode, FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  to: string;
};

const Component: FC<Props> = ({ children, to }) => (
  <Link to={to}>
    <div className="h-full w-full bg-Elements-CardBackground rounded-lg px-4 py-2 shadow-md hover:bg-Illustration-Highlight hover:bg-opacity-30">
      {children}
    </div>
  </Link>
);

export default Component;
