import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const Component = () => {
  return (
    <header className="bg-Elements-CardBackground p-1 md:p-2 border-b border-Illustration-Stroke">
      <div className="max-w-7xl mx-auto">
        <div className="px-2 flex items-center justify-start">
          <div className="flex items-center">
            <Link
              to="/"
              className="ml-2 md:m-0 cursor-pointer"
              aria-label="Logo"
            >
              <img src={logo} alt="logo" className="h-10" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Component;
