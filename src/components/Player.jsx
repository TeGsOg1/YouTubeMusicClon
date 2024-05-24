import { usePlayerStore } from "@/store/PlayerStore";
import { useEffect, useRef, useState } from "react";
import { Slider } from "./Slider";

export const Pause = () => (
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
const CurrentSong = ({ image, title, artists }) => {
  return (
    <section className="flex flex-row items-center gap-4 pt-2 w-[200px]">
      <div className="min-w-16 min-h-16 bg-slate-500 ">
        <img src={image} className="h-16 w-16" alt={title} />
      </div>
      <div className="flex flex-col">
        <span className="truncate">{title}</span>
        <span className="opacity-80">{artists}</span>
      </div>
    </section>
  );
};

const VolumeControls = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolumeRef = useRef(volume);

  const isVolumeMuted = volume === 0;

  const volumeClick = () => {
    if (isVolumeMuted) {
      setVolume(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }
  }

  return (
    <div className="flex justify-center justify-items-center  text-white gap-3">
        <button onClick={volumeClick}>
          {volume === 0 ? <VolumeMute /> : <Volume />}
        </button>
      <Slider
        defaultValue={[100]}
        min={0}
        max={100}
        value={[volume * 100]}
        className="w-24"
        onValueChange={(value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }}
      />
    </div>
  );
};

export const AudioControls = ({audio}) => {
  const [ currentTime, setCurrentTime ] = useState(0);

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime)
  }

  useEffect(() => {
    audio.current.addEventListener('timeupdate', handleTimeUpdate)
    return () => {
      audio.current.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, []);

  const formatTime = time => {
    if(time == null) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  const duration = audio?.current?.duration ?? 0;

  return(
    <div className="flex flex-row gap-4">
      
      <span className=" opacity-70">{formatTime(currentTime)}</span>
      
      <Slider
        value={[currentTime]}
        min={0}
        max={audio?.current?.duration ?? 0}
        className="w-[100px] md:w-[400px]"
        onValueChange={(value) => {
          const [newTimeUpdate] = value;
          audio.current.currentTime = newTimeUpdate;
        }}
      />

      <span className="opacity-70">{formatTime(duration)}</span>
    </div>
  )
}

export function Player() {
  const { currentMusic, isPlaying, setIsPlaying, volume, setAudioRef } = usePlayerStore();
    const audioRef = useRef(null);

    useEffect(() => {
        setAudioRef(audioRef);
    }, [setAudioRef]);



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
    setIsPlaying(!isPlaying);
  };
  
  if(!currentMusic.song) return
  return (
    <div className="flex flex-row w-full h-20 px-4 gap-4 justify-between z-50 text-white">
      <div className="hidden md:block ">
        <CurrentSong {...currentMusic.song} />
      </div>
      <div className="grid place-content-center ">
        <div className="flex flex-col justify-center items-center">
          <button className="w-10 " onClick={handleClick}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <audio ref={audioRef} />
          <AudioControls audio={audioRef} />
        </div>
      </div>

      <div className="flex ">
        <VolumeControls />
      </div>
    </div>
  );
}
