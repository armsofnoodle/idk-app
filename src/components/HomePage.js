import React, { useEffect } from "react";
import Filters from "./Filters";

const HomePage = () => {
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
      <div className="intro">
        <h2 className="title">Can't decide where you want to eat/drink?</h2>
        <p>
          Let me know what you are after, how far you want to travel and how
          boujee you are and I'll turn it into an adventure!
        </p>
      </div>
      <Filters />
    </div>
  );
};

export default HomePage;
