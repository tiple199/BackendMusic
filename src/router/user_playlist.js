import express from "express";
import {
    createPlaylist,
    getAllPlaylistsFromUser,
    deletePlaylist
} from "../controllers/user_playlist.js";

const router = express.Router();

router.post("/user-playlists", createPlaylist);
router.get("/user-playlists", getAllPlaylistsFromUser);
router.delete("/user-playlists", deletePlaylist);

export default router;