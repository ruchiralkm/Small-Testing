import React from "react";
import Logo from "./Logo";

function NavBar() {
  return (
    <>
      <div className="relative z-10 flex items-center justify-between max-w-screen-lg mx-auto text-black">
        <Logo />
        <svg
          className="w-8 h-8 "
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default NavBar;
