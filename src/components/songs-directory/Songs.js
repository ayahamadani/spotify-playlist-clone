import React, { useState } from "react";
import SongsData from "./songs/SongsData";
import "./songs.css";

export default function Songs() {
  // STATES

  const [unheartedHeart, setUnheartedHeart] = useState(false);
  const [heartedHeart, setHeartedHeart] = useState(false);
  // Pause state for the pause icon of the songs
  const [pause, setPause] = useState(false);
  // Pause for the current song
  const [pauseCurrent, setPauseCurrent] = useState(false);
  //current song state
  const [currentSong, setCurrentSong] = useState(null);
  // Current audio state
  const [audio, setAudio] = useState(null);

  // FUNCTIONS

  // hoverIn that gets triggered once you hover a song
  const hoverIn = () => {
    // If the song isn't liked, the unliked heart shows
    if (!heartedHeart) {
      setUnheartedHeart(true);
    }
    // The song number becomes a pause icon
    setPause(true);
  };

  // hoverOut function which gets triggered when you hover out of a song
  const hoverOut = () => {
    // The unhearted heart disappears
    setUnheartedHeart(false);
    // The pause icon is replaced by the song number
    setPause(false);
  };

  // heartSong which makes the song liked or unliked onClick
  const heartSong = () => {
    setHeartedHeart(!heartedHeart);
  };

  // playSong function that plays a song upon clicking on the play button based on the filePath
  const playSong = (filePath, index) => {
    // Check if an audio element exists and is currently playing
    if (audio && !audio.paused) {
      // Pause the current playing audio
      audio.pause();
      setPauseCurrent(false);
      // If it's the same song that was playing, just pause it
      if (currentSong === index) {
        return;
      }
    }

    // Create a new audio element for the selected song
    const newAudio = new Audio(filePath);

    // Update the currentSong and audio state
    setCurrentSong(index);
    setAudio(newAudio);

    // Add an event listener for when the song ends
    newAudio.addEventListener("ended", () => {
      // Handle what should happen when the song ends (e.g., play the next song)
    });

    // If the audio was paused, set the currentTime to the current position
    if (audio && audio.paused && currentSong === index) {
      newAudio.currentTime = audio.currentTime;
    }

    // Play the new audio
    newAudio.play();

    // If needed, you can also update the state to show the pause icon
    setPauseCurrent(true);
  };

  const clickPause = () => {
    setPauseCurrent(!pauseCurrent);

    if (audio) {
      if (pauseCurrent) {
        audio.pause();
      } else {
        audio.play();
      }
    }
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
              onClick={() => playSong(song.filePath, index)}
            >
              {pause ? <i className="fa-solid fa-play" /> : song.id}
            </div>

            <div className="flex align-center">
              <div className="flex justify-start">
                <img
                  src={song.albumCover}
                  className="album-cover"
                  alt="wasteland-cover"
                />
              </div>
              <div>
                <div className="white pl1">{song.title}</div>
                <div className="pl1p2 grey fss">{song.artist}</div>
              </div>
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
        {/* Right Div */}
        <div className="flex pl1">
          <div className="current-album-cover-container">
            {currentSong !== null ? (
              <img
                src={SongsData[currentSong].albumCover}
                alt={SongsData[currentSong].title}
                className="current-album-cover"
              />
            ) : (
              <span>meow</span>
            )}
          </div>
          <div className="flex flex-column justify-center pl1">
            <div className="current-song-title">
              {currentSong !== null ? SongsData[currentSong].title : "mewo"}{" "}
            </div>
            <div className="artist grey">
              {currentSong !== null ? SongsData[currentSong].artist : "mewo"}{" "}
            </div>
          </div>
        </div>

        <div>
          <div className="flex center">
            <div className="p1">
              <i className="fa-solid fa-shuffle" />
            </div>
            <div className="p1">
              <i className="fa-solid fa-backward-step" />
            </div>
            <div className="p1" onClick={clickPause}>
              {pauseCurrent ? (
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
        <div className="flex justify-end align-center mr2">meow</div>
      </div>
    </div>
  );
}
