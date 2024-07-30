import { Play, Pause } from './Player';
import { usePlayerStore } from '@/store/PlayerStore';

export function CardPlayButton({ id }) {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic,
    setIsPlayerOpen,
  } = usePlayerStore();

  const isPlayingSong = isPlaying && currentMusic?.song?.id === id;
  const handleClick = () => {
    if (isPlayingSong) {
      setIsPlaying(false);
        }

        fetch(`/api/getSongsInfo.json?id=${id}`)
        .then(res => res.json())
        .then(data => {
                const { songs, playlist, song } = data;
                setIsPlaying(true)
                setCurrentMusic({ songs, playlist, song: songs[id-1] })
    });
    setIsPlayerOpen(true);
    }

    return(
    <button onClick={handleClick} className=' w-full bg-slate-400'>
      {isPlaying && currentMusic.song.id == id ? <Pause /> : <Play />}
    </button>
  );
}
