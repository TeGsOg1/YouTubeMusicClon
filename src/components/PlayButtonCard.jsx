import { Play, Pause } from './Player';
import { usePlayerStore } from '@/store/PlayerStore';

export function CardPlayButton({ id, padding, title }) {
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
                const { songs } = data;
                if (songs && songs.length) {
                  // guardar la lista completa en el store para navegación sin nuevos fetchs
                  setCurrentMusic({ song: songs[id-1], songs });
                } else {
                  // si no vienen canciones, intentar guardar solo el song seleccionado
                  setCurrentMusic({ song: { id } });
                }
                setIsPlaying(true)
    });
    setIsPlayerOpen(true);
    }

    return(
    <button onClick={handleClick} aria-label={title} className={`absolute z-10 opacity-0 active:opacity-85 transition-all cursor-pointer w-full h-full md:hover:opacity-85 active:transition-opacity inset-0 bg-slate-400 ${padding}`}>
      {isPlaying && currentMusic.song.id == id ? <Pause /> : <Play />}
    </button>
  );
}
