import express from "express";

const app = express();
app.use(express.json());
const PORT = 3000;

import { getSongs, getSongByPosition, addNewSong } from "./function.js";

app.get("/songs", async (req, res) => {
  try {
    const songs = await getSongs();
    res.status(200).send(songs);
  } catch (error) {
    res.status(500).send("Songs not found");
  }
});

app.get("/songs/:position", async (req, res) => {
  try {
    const position = req.params.position;
    const song = await getSongByPosition(position);
    res.status(200).json(song);
  } catch (error) {
    res.status(500).send("Song not found");
  }
});

app.post("/songs", async (req, res) => {
  try {
    const { artistTitle, songTitle } = req.body;
    const newSong = await addNewSong(artistTitle, songTitle);
    res.status(201).json({
      message: "New song successully added",
      payload: newSong,
    });
  } catch (error) {
    res.status(500).send("Unsuccessful attempt to add new song");
  }
});

//a post request
// that accepts a json body
//create a varibale for the json body called data
//call the addNewSong function and pass the data as a parameter
//respond with the new song

app.listen(PORT, (req, res) => {
  console.log(`This app is listening on port ${PORT}`);
});
