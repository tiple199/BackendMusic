import express from "express";
import { addSong, getAllSongs, getSongById, getSongsByPlaylistId, getRandomSong, addSongToPlaylist, removeSongFromPlaylist } from "../controllers/baihat.js";


const router = express.Router();
router.get('/songs',getAllSongs);
router.post('/songs',addSong);
router.get('/songs/:id',getSongById);
router.get("/playlists/:playlistId/songs", getSongsByPlaylistId);
router.get('/song/random',getRandomSong);
router.post('/playlist/add-song',addSongToPlaylist);
router.delete("/playlist/remove-song", removeSongFromPlaylist);


export default router;
