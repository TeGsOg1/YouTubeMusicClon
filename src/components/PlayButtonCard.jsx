import { Play, Pause } from './Player';
import { usePlayerStore } from '@/store/PlayerStore';

export function CardPlayButton({ id }) {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic,
  } = usePlayerStore();

  const isPlayingSong = isPlaying && currentMusic?.song?.id === id;
  const handleClick = () => {
    if (isPlayingSong) {
      setIsPlaying(false);
        }

        fetch(`/api/songs-info.json?id=${id}`)
        .then(res => res.json())
        .then(data => {
                const { songs, playlist, song } = data;
                setIsPlaying(true)
                setCurrentMusic({ songs, playlist, song: songs[id-1] })
                console.log({isPlaying, currentMusic})
        });

    }

    return(
        <button onClick={handleClick} className=' p-10 w-full bg-slate-400'>
      {isPlayingSong ? <Pause /> : <Play />}
    </button>
  );
}
