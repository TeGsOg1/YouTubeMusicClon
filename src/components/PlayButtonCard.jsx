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

        fetch(`/api/getSongsInfo.json?id=${id}`)
        .then(res => res.json())
        .then(data => {
                const { songs, playlist, song } = data;
                setIsPlaying(true)
                setCurrentMusic({ songs, playlist, song: songs[id-1] })
    });

    }

    return(
        <a href={`/song/${id}`} onClick={handleClick} className=' bg-slate-400'>
      {isPlaying ? <Pause /> : <Play />}
    </a>
  );
}
