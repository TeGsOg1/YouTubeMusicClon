import { usePlayerStore } from "@/store/PlayerStore";
import { useEffect, useRef, useState } from "react";
import { PlayerOpenMobile } from "@/components/PlayerOpenMobile";
import { Slider } from "./Slider";
import { SliderDesk } from "./SliderDesk";
import "@/components/style/player.css";

export const Pause = () => (
  <svg
    viewBox="0 0 24 24"
    fill="#fff"
    width={24}
    height={24}
    cursor={"pointer"}

    preserveAspectRatio="xMidYMid meet"
    className="style-scope tp-yt-iron-icon"
    style={{
      pointerEvents: "none",
      display: "block",
      width: "100%",
      height: "100%",
    }}
  >
    <g className="style-scope tp-yt-iron-icon">
      <path
        d="M6,19h4V5H6v14H6z M14,19h4V5h-4v14H14z"
        className="style-scope tp-yt-iron-icon"
      ></path>
    </g>
  </svg>
);
export const Play = () => (
  <svg
    viewBox="0 0 24 24"
    fill="#fff"
    width={24}
    height={24}
    cursor={"pointer"}
    preserveAspectRatio="xMidYMid meet"
    className="style-scope tp-yt-iron-icon"
    style={{
      pointerEvents: "none",
      display: "block",
      width: "100%",
      height: "100%",
    }}
  >
    <g className="style-scope tp-yt-iron-icon">
      <path
        d="M6,4l12,8L6,20V4z"
        className="style-scope tp-yt-iron-icon"
      ></path>
    </g>
  </svg>
);
export const Back = () => (
  <svg
    viewBox="0 0 24 24"
    fill="#fff"
    width={24}
    height={24}
    preserveAspectRatio="xMidYMid meet"
    className="style-scope tp-yt-iron-icon"
    style={{
      pointerEvents: "none",
      display: "block",
      width: "100%",
      height: "100%",
    }}
  >
    <g className="style-scope tp-yt-iron-icon">
      <path
        d="M19,6L9,12l10,6V6L19,6z M7,6H5v12h2V6z"
        className="style-scope tp-yt-iron-icon"
      ></path>
    </g>
  </svg>
);
export const Next = () => (
  <svg
    viewBox="0 0 24 24"
    fill="#fff"
    width={24}
    height={24}
    className="style-scope tp-yt-iron-icon"
    style={{
      pointerEvents: "none",
      display: "block",
      width: "100%",
      height: "100%",
    }}
  >
    <g className="style-scope tp-yt-iron-icon">
      <path
        d="M5,18l10-6L5,6V18L5,18z M19,6h-2v12h2V6z"
        className="style-scope tp-yt-iron-icon"
      ></path>
    </g>
  </svg>
);
export const VolumeMute = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="#ffffff"
      d="m19.8 22.6l-3.025-3.025q-.625.4-1.325.688t-1.45.462v-2.05q.35-.125.688-.25t.637-.3L12 14.8V20l-5-5H3V9h3.2L1.4 4.2l1.4-1.4l18.4 18.4zm-.2-5.8l-1.45-1.45q.425-.775.638-1.625t.212-1.75q0-2.35-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.138T21 11.975q0 1.325-.363 2.55T19.6 16.8m-3.35-3.35L14 11.2V7.95q1.175.55 1.838 1.65T16.5 12q0 .375-.062.738t-.188.712M12 9.2L9.4 6.6L12 4z"
    />
  </svg>
);
export const Volume = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="#fff"
      d="M14 20.725v-2.05q2.25-.65 3.625-2.5t1.375-4.2t-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.138T21 11.975t-1.95 5.613T14 20.725M3 15V9h4l5-5v16l-5-5zm11 1V7.95q1.175.55 1.838 1.65T16.5 12q0 1.275-.663 2.363T14 16"
    />
  </svg>
);
export const ArrowUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="m12 10.828l-4.95 4.95l-1.414-1.414L12 8l6.364 6.364l-1.414 1.414z"
    />
  </svg>
);

export const Loop = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
    <g>
      <path d="M21,13h1v5L3.93,18.03l2.62,2.62l-0.71,0.71L1.99,17.5l3.85-3.85l0.71,0.71l-2.67,2.67L21,17V13z M3,7l17.12-0.03 l-2.67,2.67l0.71,0.71l3.85-3.85l-3.85-3.85l-0.71,0.71l2.62,2.62L2,6v5h1V7z"></path>
    </g>
  </svg>
);

export const Like = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="#fff" d="M2 10h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1m0 1v9h3v-9zm15.72 8.03l3-5c.18-.3.28-.66.28-1.03v-1a2 2 0 0 0-2-2h-5.61l1.46-5.44v-.02a.97.97 0 0 0-.26-.96l-6 6.01C8.22 9.95 8 10.45 8 11v7a2 2 0 0 0 2 2h6c.73 0 1.37-.39 1.72-.97M22 13c0 .59-.17 1.15-.47 1.61l-2.91 4.84C18.11 20.38 17.13 21 16 21h-6a3 3 0 0 1-3-3v-7c0-.83.34-1.58.88-2.12l6.71-6.72l.71.71c.53.53.7 1.29.51 1.97L14.69 9H19a3 3 0 0 1 3 3z" />
  </svg>
);

export const Dislike = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path fill="#ffffff" d="M21 15h-3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1m0-1V5h-3v9zM5.28 5.97l-3 5c-.18.3-.28.66-.28 1.03v1a2 2 0 0 0 2 2h5.61l-1.46 5.44v.02c-.09.33-.01.7.26.96l6.01-6l-.01-.01c.37-.36.59-.86.59-1.41V7a2 2 0 0 0-2-2H7c-.73 0-1.37.39-1.72.97M1 12c0-.59.17-1.15.47-1.61l2.91-4.84C4.89 4.62 5.87 4 7 4h6a3 3 0 0 1 3 3v7c0 .83-.33 1.58-.88 2.12l-6.71 6.72l-.71-.71c-.53-.53-.7-1.29-.51-1.97L8.31 16H4a3 3 0 0 1-3-3z"/>
</svg>
);

const CurrentSong = ({ image, title, artists }) => {
  const { currentMusic, toggleLike, toggleDislike } = usePlayerStore(state => ({
    currentMusic: state.currentMusic,
    toggleLike: state.toggleLike,
    toggleDislike: state.toggleDislike,
  }));

  return (
    <section className="flex flex-row gap-4 justify-start items-center w-full transition-all">
      <div className="relative min-w-16 min-h-16 rounded-md transition-all">
        <img src={currentMusic?.song?.image == undefined ? "./Image/Notsong.webp" : image} alt={currentMusic?.song?.image == undefined ? "Not Available" : `${title} cover`} className="z-40 size-16 transition-all" />
      </div>
      <div className="SongArtist flex flex-col w-full">
        <span className="text-lg whitespace-nowrap overflow-hidden text-ellipsis">{currentMusic?.song?.title == undefined ? "No se encontró una canción" : title}</span>
        <span className="text-sm  whitespace-nowrap overflow-hidden text-ellipsis">{artists}</span>
      </div>
      <div className="hidden md:flex flex-row" onClick={(e) => {
        e.stopPropagation();
      }}>
        <button className="px-2 py-1 cursor-pointer rounded-full"
        onClick={toggleLike}>
          <Like/>
        </button>
        <button className="px-2 py-1 cursor-pointer rounded-full"
        onClick={toggleDislike}>
          <Dislike/>
        </button>
      </div>
    </section>
  );
};

const VolumeControls = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolumeRef = useRef(volume);

  const isVolumeMuted = volume === 0;

  const handleClickVolume = () => {
    if (isVolumeMuted) {
      setVolume(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }
  };

  return (
    <div className="flex justify-center justify-items-center  text-white gap-3">
      <Slider
        aria-label="Volumen"
        defaultValue={[100]}
        min={0}
        max={100}
        value={[volume * 100]}
        onClick={(e) => { e.stopPropagation() }}
        className="volumeSlider w-24 cursor-pointer"
        onValueChange={(value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }}
      />
      <button className="volumeButton cursor-pointer p-1 rounded-full active:bg-slate-500/30 transition-colors " aria-label="Silenciar" onClick={(e) => {
        e.stopPropagation();
        handleClickVolume();
      }}>
        {volume === 0 ? <VolumeMute /> : <Volume />}
      </button>
    </div>
  );
};

export const AudioControlsDesk = ({ audio }) => {
  const { currentTime, setCurrentTime } = usePlayerStore((state) => state);

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  };

  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  return (
    <div className="hidden md:block absolute z-50 top-0 right-0 left-0">
      <SliderDesk
        value={[currentTime]}
        min={0}
        max={audio?.current?.duration ?? 0}
        className="w-full"
        onClick={(e) => { e.stopPropagation() }}
        onValueChange={(value) => {
          const [newTimeUpdate] = value;
          audio.current.currentTime = newTimeUpdate;
        }}
      />
    </div>
  );
};

export const PlayerButtons = ({ audio, children }) => {
  const { currentTime, setCurrentTime } = usePlayerStore(
    (state) => state
  );

  const handleClickBack = () => {
    setCurrentTime(0);
    audio.current.currentTime = 0;
  };

  const formatTime = (time) => {
    if (time == null) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const duration = audio?.current?.duration ?? 0;

  return (
    <div className="flex flex-row justify-center items-center gap-6">
      <button onClick={(e) => {
        e.stopPropagation();
        handleClickBack();
      }} className="w-7 h-7 cursor-pointer"
      aria-label="Rebobinar">
        <Back />
      </button>

      {children}

      <button onClick={(e) => {
        e.stopPropagation();
      }} className="w-7 h-7 cursor-pointer"
      aria-label="Siguiente">
        <Next />
      </button>
      <div className="hidden md:flex gap-1">
        <span className="opacity-70 text-xs">{formatTime(currentTime)}</span>
        <span className="opacity-70 text-xs"> / </span>
        <span className="opacity-70 text-xs">
          {duration ? formatTime(duration) : null}
        </span>
      </div>
    </div>
  );
};

export const LoopButton = ({ audio }) => {
  const { currentTime, setCurrentTime } = usePlayerStore();
  const [isLooping, setIsLooping] = useState(false);

  const handleClick = () => {
    setIsLooping(!isLooping);
  };

  useEffect(() => {
    if (isLooping && currentTime === audio.current.duration) {
      setCurrentTime(0);
      audio.current.play();
    }
  }, [currentTime]);

  return (
    <button
      aria-label="Repetir"
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
      className={`loopButton relative cursor-pointer p-1 rounded-full active:bg-slate-500/30 transition-colors ${isLooping ? "opacity-100" : "opacity-60"}`}
    >
      <Loop />
    </button>
  );
};

export function Player() {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    volume,
    isPlayerOpen,
    setIsPlayerOpen,
  } = usePlayerStore();
  const audioRef = useRef(null);

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    const { song } = currentMusic;
    if (song) {
      const src = `/music/${song.id}/${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  }, [currentMusic]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const handleClick = () => {
    if (currentMusic.song) setIsPlaying(!isPlaying);
  };

  const handleClickOpen = () => {
    if (currentMusic.song) setIsPlayerOpen(!isPlayerOpen);
  };

  const Arrow = isPlayerOpen ? "arrowDown" : "arrowUp";

  return (
    <div onClick={handleClickOpen} className="player">
      <div className="hidden md:flex justify-center rotate items-center z-40">
        <PlayerButtons audio={audioRef}>
          <button onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }} className="hidden md:block size-[42px] cuirsor-pointer">
            {isPlaying ? <Pause fill="red"/> : <Play />}
          </button>
        </PlayerButtons>

        <audio ref={audioRef} />
      </div>

      <div>
        <CurrentSong {...currentMusic.song} />
      </div>
      <div className="hidden md:flex mr-8 gap-3">
      <VolumeControls />
      <LoopButton audio={audioRef} />
        <button
          className={`${Arrow} hidden md:block w-2 justify-center items-center transition-all`}
          onClick={handleClickOpen}
          aaria-label="Expandir "
        >
          <ArrowUp />
        </button>
      </div>
      {!isPlayerOpen && (
        <div className="min-w-10 z-50 pt-2 md:hidden">
          <button
          aria-label="Reproducir"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </div>
      )}
      <PlayerOpenMobile audio={audioRef}/>

      <AudioControlsDesk audio={audioRef} />
    </div>
  );
}
