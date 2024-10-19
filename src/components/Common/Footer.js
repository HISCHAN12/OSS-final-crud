import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="steam-footer">
      <div className="footer-content">
        <img
          src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
          alt="Steam Logo"
        />
        <p>© 2023 Valve Corporation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
