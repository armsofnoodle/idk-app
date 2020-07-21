import React, { useEffect } from "react";

const AboutPage = () => {
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
    <div className="about">
      <h1 className="about-title">About</h1>
      <p className="about-text">
        Too many times have I been with someone trying to decide where to go
        grab food or drinks and we end up in the endless loop of ‘I don’t know,
        you choose’. <span className="italic">idk</span> exists to solve that
        problem by randomly selecting somewhere based on your filters.{" "}
      </p>
      <p className="about-text">
        All the locations that it selects are pulled from Google maps so
        apologies if you get there and has closed down. If you are going to
        drive to get there, please focus on the road and let your passenger
        navigate.
      </p>
      <p className="about-text">
        <span className="italic">idk</span> is perfect for the next time you are
        hanging out with friends or on a date, so get out there and turn your
        outing into an adventure!
      </p>
      <p className="about-text italic"> - Gianni</p>
      <p />
      <div>
        <p className="about-text">
          If you notice any issues or are keen to get in touch:
        </p>
        <ul className="list">
          <li>
            <a
              rel="noopener noreferrer"
              href="mailto:giovanni.gambassi@gmail.com"
              target="_blank"
            >
              Email
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/armsofnoodle/"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/giannigambassi/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="http://gambassi.digital/"
              target="_blank"
            >
              Check out my other work!
            </a>
          </li>
        </ul>
      </div>
      <p className="about-text-bottom">
        Due to the limitations of the technology of my time,{" "}
        <span className="italic">idk</span> is not supported by certain
        browsers/devices. As of July 2020, an iPhone running Safari or Chrome
        achieves the best results.
      </p>
    </div>
  );
};

export default AboutPage;
