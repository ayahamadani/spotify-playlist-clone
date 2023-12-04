import wasteland from "./images/wasteland.jpg";
import unVeranoSinTi from "./images/Un-Verano-Sin-Ti.jpg";
const SongsData = [
  {
    id: 1,
    albumCover: wasteland,
    title: "ROLE MODEL",
    album: "WASTELAND",
    dateAdded: "Jul 2, 2023",
    duration: "3:14",
    artist: "Brent Faiyez",
    filePath: require("./brent-faiyez-role-model.mp3"),
  },
  {
    id: 2,
    albumCover: wasteland,
    title: "ROLLING STONE",
    album: "WASTELAND",
    dateAdded: "Jul 12, 2023",
    duration: "2:42",
    artist: "Brent Faiyez",
    filePath: require("./brent-faiyez-rolling-stone.mp3"),
  },
  {
    id: 3,
    albumCover: unVeranoSinTi,
    title: "Andrea",
    album: "Un Verano Sin Ti",
    dateAdded: "Sep 22, 2023",
    duration: "5:40",
    artist: "Bad Bunny",
    filePath: require("./bad-bunny-andrea.mp3"),
  },
];

export default SongsData;
