import { Play, Pause } from './Player';
import { usePlayerStore } from '@/store/PlayerStore';

export function CardPlayButton({ id, padding }) {
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
                const { songs, song } = data;
                setIsPlaying(true)
                setCurrentMusic({ song, song: songs[id-1] })
    });
    setIsPlayerOpen(true);
    }

    return(
    <button onClick={handleClick} className={`absolute z-10 opacity-0 active:opacity-85 w-full h-full md:hover:opacity-85 active:transition-opacity inset-0 bg-slate-400 ${padding}`}>
      {isPlaying && currentMusic.song.id == id ? <Pause /> : <Play />}
    </button>
  );
}
