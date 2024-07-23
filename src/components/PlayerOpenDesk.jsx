import { usePlayerStore } from "@/store/PlayerStore";
import { useEffect, useRef, useState } from "react";

export const ImageSong = () => {
    const { currentMusic } = usePlayerStore();
    return (
            <img src={currentMusic.song?.image} alt={currentMusic.song?.name} />
    )
}

export const SongInfo = () => {
    const { currentMusic } = usePlayerStore();
    return (
            <p>{currentMusic.song?.lyrics}</p>
    )
}

export const PlayerOpenDesk = () => {
    return(
        <div>
            <div>
                <ImageSong />
            </div>
            <div>
                <SongInfo />
            </div>
        </div>
    )
}