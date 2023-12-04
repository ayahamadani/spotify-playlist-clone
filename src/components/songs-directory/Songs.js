import React, { useState } from "react";
import SongsData from "./songs/SongsData";
import "./songs.css";

export default function Songs() {
  const [unheartedHeart, setUnheartedHeart] = useState(false);
  const [heartedHeart, setHeartedHeart] = useState(false);
  const [pause, setPause] = useState(false);

  const hoverIn = () => {
    if (!heartedHeart) {
      setUnheartedHeart(true);
    }
  };

  const hoverOut = () => {
    setUnheartedHeart(false);
  };

  const heartSong = () => {
    setHeartedHeart(!heartedHeart);
  };

  const playSong = (filePath) => {
    const audio = new Audio(filePath);
    audio.play();
  };

  const clickPause = () => {
    setPause(!pause);
  };

  return (
    <div className="songsMain gotham">
      <div className="w100 pl4">
        <div className="song pb1 B3B3B3">
          <div className="flex justify-content-center">#</div>
          <div>
            <div style={{ textAlign: "start" }}>Title</div>
          </div>
          <div>Album</div>
          <div>Date Added</div>
          <div className="flex center">
            <i className="fa-regular fa-clock"></i>
          </div>
        </div>
        {SongsData.map((song, index) => (
          <div
            key={index}
            onMouseOver={hoverIn}
            onMouseLeave={hoverOut}
            className={`song B3B3B3 h4 ${heartedHeart && "hearted"}`}
          >
            <div
              className="flex align-center justify-content-center"
              onClick={() => playSong(song.filePath)}
            >
              {<i className="fa-solid fa-play white" />}
            </div>

            <div className="flex align-center">
              <div className="flex justify-start">
                <img
                  src={song.albumCover}
                  className="album-cover"
                  alt="wasteland-cover"
                />
              </div>
              <div className="white pl1">{song.title}</div>
            </div>

            <div className="flex align-center">{song.album}</div>
            <div className="flex align-center">{song.dateAdded}</div>

            <div className="flex center">
              <div onClick={heartSong}>
                {heartedHeart ? (
                  <i className="fa-solid fa-heart green" />
                ) : unheartedHeart ? (
                  <i className="fa-regular fa-heart" />
                ) : (
                  song.duration
                )}
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
      <div className="currentSongMain">
        meow
        <div>
          <div className="flex center">
            <div className="p1">
              <i className="fa-solid fa-shuffle" />
            </div>
            <div className="p1">
              <i className="fa-solid fa-backward-step" />
            </div>
            <div className="p1" onClick={clickPause}>
              {pause ? (
                <i className="fa-solid fa-pause" />
              ) : (
                <i className="fa-solid fa-play" />
              )}
            </div>
            <div className="p1">
              <i className="fa-solid fa-forward-step" />
            </div>
            <div className="p1">
              <i className="fa-solid fa-repeat" />
            </div>
          </div>
          <div className="flex center">
            <progress id="songProgress" max="100" value="25"></progress>
          </div>
        </div>
        <div className="flex justify-end align-center">meow3</div>
      </div>
    </div>
  );
}
