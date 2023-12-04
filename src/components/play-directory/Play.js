import React from "react";
import "./play.css";

export default function Play() {
  return (
    <div className="flex justify-between main gotham">
      <div className="flex left-container center">
        <div className="play-btn-container circle flex w4 h4 hover">
          <i className="fa-solid fa-play play-btn flex center fa-xl" />
        </div>
        <div className="ml2 enhance-btn hover">Enhance</div>
        <div className="ml2 download-btn-container circle w4 h4 flex center hover">
          <i className="fa-solid fa-arrow-down flex center fa-xl" />
        </div>
        <div className="ml2 hover">
          <i className="fa-solid fa-user-plus fa-xl" />
        </div>
        <div className="more-options-div hover">•••</div>
      </div>
      <div className="flex right-container flex center">
        <div className="hover">
          <i className="fa-solid fa-magnifying-glass fa-xl" />
        </div>
        <div className="ml2 date-added-container hover">Date Added</div>
        <div>
          <i className="fa-solid fa-caret-down pl1 fa-xl hover" />
        </div>
      </div>
    </div>
  );
}
