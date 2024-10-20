import React from "react";
import { Button, Stack } from "@mui/material"; 
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";
import Gamepad from "@mui/icons-material/Gamepad"; 
import './Carosol.css';
import { EventBusyRounded } from "@mui/icons-material";

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

      <div className="button-group">
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: 2 }}>
          <Button variant="contained" startIcon={<Gamepad />}>
            축제 맞이 이벤트 진행 중!
          </Button>
          <Button variant="outlined" startIcon={<EventBusyRounded />}>
            할로윈 맞이하기
          </Button>
          <Button variant="contained" color="success" href="https://store.steampowered.com/about/" target="_blank" startIcon={<ShoppingCartRounded />}>
          Steam 설치
          </Button>
        </Stack>

      </div>
    </div>
  );
};

export default Carasol;
