import { useEffect, useState } from 'react';
import { usePlayerStore } from "@/store/PlayerStore";
import { Slider } from "./Slider";
import { ArrowUp, Play, Pause, PlayerButtons } from './Player';
import '@/components/style/player.css';


export const AudioControlsMobile = ({audio}) => {
    const { currentTime, setCurrentTime } = usePlayerStore(state=>state);
  
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
      <div className="flex flex-col gap-4 px-2 w-full ">
        
        <div className="w-full">
  
        <Slider
          value={[currentTime]}
          min={0}
          max={audio?.current?.duration ?? 0}
          className="w-[100%]"
          onClick={(e) => {e.stopPropagation()}}
          onValueChange={(value) => {
            const [newTimeUpdate] = value;
            audio.current.currentTime = newTimeUpdate;
          }}
          />
        </div>
        <div className="w-full flex justify-between">    
          <span className=" opacity-70 text-white">{formatTime(currentTime)}</span>
          <span className="opacity-70 text-white">{duration ? formatTime(duration): null}</span>
        </div>
      </div>
    )
}

export const PlayerImageMobile = ({image, title, artists}) => {
    return (
      <div onClick={(e) => {e.stopPropagation()}} className='flex flex-col gap-4'>
        <div className="w-full h-full flex justify-center items-center p-10 relative">
            <img 
                src={image} 
                alt={`${title} blurred image`}
                className="animate-fade-in animate-delay-150 blur-[27px] h-full w-full max-w-[3000px] max-h-[3000px] object-contain right-0 left-0 my-0 p-10 mx-auto -z-10 absolute"></img>
            <picture className="w-full h-full justify-center items-center flex">
                <img 
                className=" object-contain rounded-xl w-full h-full max-w-[280px] max-h-[280px]" 
                src={image} 
                alt={`${title} image`} 
                />
            </picture>
        </div>
        <div className=' flex flex-col gap-3'>
          <span className='text-2xl text-ellipsis text-white'>{title}</span>
          <span className='text-xl text-white'>{artists}</span>
        </div>
      </div>
    )
}

export const PlayerOpenMobile = ({audio}) => {
    const { currentMusic, isPlaying, setIsPlaying, isPlayerOpen, setIsPlayerOpen } = usePlayerStore(state => state);

    const [isPlayerSong, setIsPlayerSong] = useState(true);
    const [isLirycOpen, setIsLirycOpen] = useState(false);
    const [isNextSong, setIsNextSong] = useState(false);

    const handleClick = () => {
      setIsPlaying(!isPlaying)
    }

    const handleClickOpen = () => {
      setIsPlayerOpen(!isPlayerOpen);
    };

    const handleClickSong = () => {
      setIsLirycOpen(false);
      setIsPlayerSong(true);
    }

    const handleClickLyric = () => {
      setIsPlayerSong(false);
      setIsLirycOpen(true);
    }

    const PlayerOpen = isPlayerOpen ? 'playerMobile' : 'playerMobileOpen';

    return (
      <div className={`${PlayerOpen} fixed md:hidden flex flex-col justify-between bottom-0 h-dvh w-full left-0 right-0 px-4 z-50 bg-black`}>
        <div className='min-h-16 w-full flex items-center'>
          <button onClick={handleClickOpen} className='rotate-180'>
            <ArrowUp />
          </button>
        </div>
        {isPlayerSong && 
        <section>
            <PlayerImageMobile {...currentMusic.song} />
          <div className='mt-5'>
              <AudioControlsMobile audio={audio} />
              <PlayerButtons audio={audio}>
              <button onClick={(e) => {
                e.stopPropagation();
                handleClick();}} className='PlayButtonMobile bg-white p-6 rounded-full'>
                  {isPlaying ? <Pause className='fill-black'/> : <Play className='fill-black'/>}
              </button>
            </PlayerButtons>
          </div>
        </section>}

        {isLirycOpen && 
        <section className='w-full overflow-hidden'>
          <div className='flex flex-col gap-3 py-3 h-full'>
            <span className='text-3xl text-center font-semibold'>Letra</span>
            <p className='text-xl font-bold overflow-y-auto whitespace-pre-line'>
              {currentMusic.song.lyric}
            </p>
          </div>
        </section>
        }
      <div className='w-full min-h-14 border-t flex flex-row'>
        <button onClick={(e) => {
                e.stopPropagation();
                handleClickSong();}} className='w-full text-xl h-full font-bold border-r text-white active:bg-white active:text-black transition-all'>Canción</button>
        <button onClick={(e) => {
          e.stopPropagation();
          handleClickLyric();}} className='w-full h-full text-xl font-bold text-white active:bg-white active:text-black transition-all'>Letra</button>
      </div>
      </div>
    )
  }