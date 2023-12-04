import React from "react";
import profileIcon from "./icon.jpeg";
import playlistIcon from "./playlist-icon.jpeg";
import "./header.css";
export default function Header() {
  return (
    <div className="header color-white ">
      {/* first row */}
      <div className="flex justify-between first-header-row">
        <div className="flex p1">
          <div className="h4 w4 flex center circle hover C1E1E">
            <i className="fa-regular fa-less-than fa-xl" />
          </div>
          <div className="h4 w4 flex center circle ml1 A3A not-allowed">
            <i className="fa-regular fa-greater-than fa-xl" />
          </div>
        </div>
        <div className="flex p1">
          <div className="h4 w4 circle flex center hover B2E2E">
            <i className="fa-regular fa-bell fa-xl" />
          </div>
          <div className="h4 w4 circle flex center hover B2E2E ml1">
            <i className="fa-solid fa-users fa-xl" />
          </div>
          <div className="h4 w4 circle flex center hover B2E2E ml1">
            <img
              src={profileIcon}
              alt="profile-icon"
              className="circle icon-img"
            />
          </div>
        </div>
      </div>

      {/* second row */}
      <div className="flex align-end second-header-row">
        <div>
          <div className="left-arrow-div">
            <i class="fa-solid fa-arrow-left fa-2x" />
          </div>
          <div className="playlist-icon-div">
            <img
              src={playlistIcon}
              alt="playlist-icon"
              className="playlist-icon"
            />
          </div>
        </div>
        <div className="second-row-second-div">
          <div>
            <h2 className="circularLight pbhalf header-small-font public-playlist">
              Public Playlist
            </h2>
          </div>
          <div>
            <h1 className="circular header-big-font">
              Yes, i play the same 5 songs on repeat for hours.
            </h1>
          </div>
          <div className="flex ">
            <h2 className="circularLight C5C7C3 lh1p7 header-small-font">
              My friends say i have a hyperfixation on music. Adding to that, i
              usually repeat the same top ten liked songs. Therefore, this is a
              playlist of my, most likely, top ten liked songs in which i listen
              to on repeat.
            </h2>
          </div>
          <div className="flex header-info-div">
            <div className="h4 w4 flex align-end">
              <img
                src={profileIcon}
                alt="icon-img"
                className="circle icon-img"
              />
            </div>
            <div className="flex align-end gotham pbhalf fs1">
              <h2>Aya • 19 songs,</h2>
              <h2 className="C5C7C3">&nbsp;1 hr 5 min</h2>
            </div>
          </div>
          {/* info container for mobile */}
          <div className="header-info-div-mobile">
            <div className="h3 w3 flex gotham center">
              <img
                src={profileIcon}
                alt="icon-img"
                className="circle icon-img pl1"
              />
              <h4 className="plhalf">Aya</h4>
            </div>
            <div className="flex align-end gotham pb1 fs1 C5C7C3">
              <i class="fa-solid fa-globe" />
              <h4 className="plhalf">&nbsp;1 hr 5 min</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
