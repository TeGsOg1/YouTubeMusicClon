import { useState } from 'react';

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

export function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className='flex flex-row w-full px-4 justify-between z-50 text-white'>
      <div>CurrentSong</div>

      <div className='grid place-content-center '>
        <div className='flex flex-row justify-center items-center'>
          <button className='w-10 ' onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </div>
      </div>

      <div>Volume</div>
    </div>
  );
}