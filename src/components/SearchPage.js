import React, { useEffect } from "react";
import GoogleApiWrapper from "./MapContainer";
import Compass from "./Compass";

const SearchPage = () => {
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      console.log("mobile");
    } else {
      window.location.replace("/desktop");
    }
  }, []);

  return (
    <div>
      <Compass />
      <div style={{ position: "relative", margin: "100px 0 0 0" }}>
        <GoogleApiWrapper />
      </div>
    </div>
  );
};

export default SearchPage;
