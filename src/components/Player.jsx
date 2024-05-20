import { usePlayerStore } from "@/store/PlayerStore";
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
  
  return(
    <section className="flex flex-row items-center gap-4 pt-2 max-w-52">
      <picture className="w-16 h-16 bg-slate-500 ">
        <img src={image} className="h-16 w-20" alt={ title } />
      </picture>
      <h3 className=" text-ellipsis">
        {title}
      </h3>
    </section>
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
    const { song, playlist } = currentMusic
    if (song) {
      const src = `/music/${song.id}/${song.id}.mp3`
      audioRef.current.src = src
      audioRef.current.play()
    }
  }, [currentMusic])

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }


  return (
    <div className="flex flex-row w-full px-4 justify-between z-50 text-white">
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

      <div className="md:grid hidden place-content-center">VOLUME</div>
    </div>
  );
}
