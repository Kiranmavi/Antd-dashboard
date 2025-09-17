import React from "react";
import "../styles/logoIcon.css"
type Props = {
  size: number;
};

const LogoIcon: React.FC<Props> = ({ size}) => {
  return (
    <img
      src="/assets/logo.webp"
      alt="logo"
      width={size}
      height={size}
    />
  );
};

export default LogoIcon;
