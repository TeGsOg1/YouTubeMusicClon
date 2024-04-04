import { usePlayerStore } from "@/store/playerStore";
import { useEffect, useRef } from "react";


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

const CurrentSong = ({ image, title }) => {
  console.log({ image, title })
  return(
    <div>
      <picture className="w-16 h-16 rounded-full bg-slate-500">
        <img src={image} alt={ title } />
      </picture>
      <h3>
        {title}
      </h3>
    </div>
  )

}

export function Player() {
  const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore(state => state)
  const audioRef = useRef()

  useEffect(() => {
    isPlaying
      ? audioRef.current.play()
      : audioRef.current.pause()
  }, [isPlaying])


  useEffect(() => {
    const { song } = currentMusic
    if (song) {
      const src = `/music/${song.id}.mp3`
      audioRef.current.src = src
      audioRef.current.play()
    }
  }, [currentMusic])

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }


  return (
    <div className="flex flex-row w-full px-4 justify-between z-40 text-white">
      <div className="hidden md:block md:w-[200px]"> 
      <CurrentSong {...currentMusic.song} />
      </div>
      <div className="grid place-content-center ">
        <div className="flex flex-row justify-center items-center">
          <button className="w-10 " onClick={handleClick}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <audio ref={audioRef} />
        </div>
      </div>

      <div className="hidden lg:grid lg:place-content-center">VOLUME</div>
    </div>
  );
}
