import React from "react";

const HamburgerMenu = props => (
  <svg width={60} height={60} viewBox="0 0 122 122" {...props}>
    <path
      d="M112 0H12C5.4 0 0 5.4 0 12s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zm0 44H12C5.4 44 0 49.4 0 56s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zm0 44H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
      fill="#000"
      fillRule="nonzero"
    />
  </svg>
);

export default HamburgerMenu;

