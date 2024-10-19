import React from "react";
import './Carosol.css';

const Carasol = () => {
  return (
    <div className="fullScreenBg">
      <div style={{ height: '450px' }}>
        <video
          className="fullScreenVideo"
          poster="https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/8ad799076d8330ab5503472c/page_bg_koreana.jpg?t=1698557339"
          autoPlay
          muted
          loop
        >
          <source
            src="https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/8ad799076d8330ab5503472c/webm_page_bg_koreana.webm?t=1698557339"
            type="video/webm"
          />
          <source
            src="https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/8ad799076d8330ab5503472c/mp4_page_bg_koreana.mp4?t=1698557339"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Carasol;
