import { useEffect, useRef, useState } from 'react';
import { usePlayerStore } from '../store/PlayerStore';

const Play = () => (
  <svg viewBox="0 0 24 24" fill='#fff' width={24} height={24} preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope tp-yt-iron-icon" style={{ pointerEvents: 'none', display: 'block', width: '100%', height: '100%' }}>
    <g className="style-scope tp-yt-iron-icon">
      <path d="M6,4l12,8L6,20V4z" className="style-scope tp-yt-iron-icon"></path>
    </g>
  </svg>
);

const Pause = () => (
  <svg viewBox="0 0 24 24" fill='#fff' width={24} height={24} preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope tp-yt-iron-icon" style={{ pointerEvents: 'none', display: 'block', width: '100%', height: '100%' }}>
    <g className="style-scope tp-yt-iron-icon">
      <path d="M6,19h4V5H6v14H6z M14,19h4V5h-4v14H14z" className="style-scope tp-yt-iron-icon"></path>
    </g>
  </svg>
);

export const VolumeSilence = () => (
  <svg fill="currentColor" role="presentation" height="16" width="16" aria-hidden="true" aria-label="Volumen apagado" viewBox="0 0 16 16" ><path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path><path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>
) 

export const Volume = () => (
  <svg fill="currentColor" role="presentation" height="16" width="16" aria-hidden="true" aria-label="Volumen alto" id="volume-icon" viewBox="0 0 16 16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path></svg>
  )

const CurrentSong = ({ title, artists, image }) => {
  return (
    <div className='flex flex-row gap-1'>
      <picture className='rounded-full w-16 h-16'>
        <img src={image} alt={title} />
      </picture>
      <h1 className='text-white'>{title}</h1>
      <a className='text-gray-600'>{artists}</a>

    </div>
  )
};

export function Player() {
  const [currentMusic, isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef()

  useEffect(() => {
    isPlaying
    ?
      audioRef.current.play()
    : audioRef.current.pause()
}, [isPlaying])

  useEffect(() => {
    const { song, playlist, songs} = currentMusic
    if(song) {
      const src =  `/Music/${song.id}`
      audioRef.current.src = src
      audioRef.current.play()
    }

  }, [currentMusic])

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='flex flex-row w-full px-4 justify-between z-50 text-white'>
      <div className='hidden md:block md:w-[200px]'> <CurrentSong {...currentMusic.song} /> </div>
    <div className='grid place-content-center '>
        <div className='flex flex-row justify-center items-center'>
          <button className='w-10 ' onClick={handleClick}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <audio ref={audioRef} />
        </div>
      </div>

      <div>Volume</div>
    </div>
  );
}