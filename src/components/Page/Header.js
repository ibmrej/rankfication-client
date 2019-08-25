import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-around bg-gray-800 text-white text-center mb-12">
      <Link to="/" className="block py-4 text-xl">
        RANKFICATION
      </Link>
    </div>
  );
};

export default Header;
