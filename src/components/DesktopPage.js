import React from "react";

const DesktopPage = () => {
  return (
    <div className="desktop">
      <div>
        <img
          className="desktopLogo"
          src="/assets/logo.png"
          alt="idk, you choose"
        />
      </div>
      <div className="content">
        <h1 className="desktop-title">
          Wondering what all the hype is about? <br />
          Come back on a mobile device and find out!
        </h1>
        <p className="desktop-text">
          <span className="italic">idk</span> is your ultimate companion when
          you are on a date or with friends.
        </p>
        <p className="desktop-text">
          No more back and forth of, "I don't mind where we go, you choose."
          Just set the type of vibe you are after, your price point and how far
          you want to travel and watch the magic unfold before you!
        </p>
        <p className="desktop-text">
          <span className="italic">idk</span> won't actually tell you where you
          are going, just give you a direction and distance so you can turn your
          date night into an adventure, explore new parts of the city and maybe
          actually have a conversation on the way...
        </p>

        <p className="desktop-text">
          Due to the limitations of the technology of my time,{" "}
          <span className="italic">idk</span> is not supported by certain
          browsers/devices. As of July 2020, an iPhone running Safari or Chrome
          achieves the best results.
        </p>
        <p className="italic desktop-text"> - Gianni</p>
        <p className=" desktop-text-bottom">
          If you have any questions or want to let me know that it works on
          another device/browser combo, please get in touch with me:
        </p>
        <div className='desktop-links'>
          <a
            rel="noopener noreferrer"
            href="mailto:giovanni.gambassi@gmail.com"
            target="_blank"
          >
            Email
          </a>

          <a
            rel="noopener noreferrer"
            href="https://www.instagram.com/armsofnoodle/"
            target="_blank"
          >
            Instagram
          </a>

          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/giannigambassi/"
            target="_blank"
          >
            LinkedIn
          </a>

          <a
            rel="noopener noreferrer"
            href="http://gambassi.digital/"
            target="_blank"
          >
            Check out my other work!
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesktopPage;
