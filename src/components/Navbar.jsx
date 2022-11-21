import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-10">
      <h2 className="text-4xl">W.</h2>
      <ul className="flex justify-between gap-12">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </div>
  );
};

export default Navbar;
