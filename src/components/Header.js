import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import videoStandard from "../images/videos/background-standard.mp4";
import videoBig from "../images/videos/background-big.mp4";

export const Header = () => {
  const { width, height } = useWindowSize();
  const bigScreen = width > 1450;

  return (
    <div id="home" className="mx-auto w-screen top-0">
      <div className="header-bg">
        <video
          src={bigScreen ? videoBig : videoStandard}
          autoPlay
          muted
          loop
          className="header-bg-video"
        />
        <h1 className="text-almond h1">Christopher Leja</h1>
        <h3 className="text-blueLight h3">Software Engineer</h3>
      </div>
    </div>
  );
};

export default Header;
