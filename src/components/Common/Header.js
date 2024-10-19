import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="steam-navbar">
      <div className="navbar-content">
        <div className="left-area">
          <Link to="/" className="navbar-logo">
            <img
              src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
              alt="Steam Logo"
            />
          </Link>
        </div>
        <div className="right-area">
          <ul className="navbar-menu">
            <li><Link to="/">상점</Link></li>
            <li><Link to="show-user">친구창</Link></li>
            <li><Link to="/create-user">친구추가</Link></li>
            <li><Link to="/support">탑 100</Link></li>
          </ul>
          <button className="btn btn-install-steam">Steam 설치</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;