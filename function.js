import { readSongs, writeSongs } from "./helpers.js";

export async function getSongs() {
  const songs = await readSongs();
  return songs;
}

const allSongs = await readSongs();

let newPosition;

if (allSongs.length > 0) {
  const totalSongs = allSongs.length;
  const lastSong = allSongs[totalSongs - 1];
  const lastPosition = lastSong.position;
  console.log("Last Position:", lastPosition);
  const lastPositionNumber = Number(lastPosition);
  newPosition = String(lastPositionNumber + 1);
} else {
  newPosition = "1";
}

export async function getSongByPosition(position) {
  const songs = await readSongs();
  const foundSong = songs.find(function (songs) {
    songs.position === String(position);
  });
  return foundSong;
}

//create a function called Add New song that takes in the paramter of data
//that adds a new song using the write songs function with the paramter of data

export async function addNewSong(artistTitle, songTitle) {
  const newSong = {
    position: newPosition,
    artistTitle: artistTitle,
    songTitle: songTitle,
  };
  const allSongs = await readSongs();
  allSongs.push(newSong);

  await writeSongs(allSongs);

  return newSong;
}
