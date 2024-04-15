import { Play, Pause } from './Player';
import { usePlayerStore } from '@/store/playerStore';

export function CardPlayButton ({ id }) {
    const {
        currentMusic,
        isPlaying,
        setIsPlaying,
        setCurrentMusic,
     } = usePlayerStore();

    const handleClick = () => {
        if (isPlayingSong) {
            setIsPlaying(false);
        }

        fetch(`/api/songs-info.json?id=$ {id}`)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist, song } = data;
                setIsPlaying(true)
                setCurrentMusic({ songs, playlist, song: songs[0] })
                console.log({isPlaying, currentMusic})
            });

    }

    const isPlayingSong = isPlaying && currentMusic?.playlist.id === id

    return(
        <button onClick={handleClick} className=' p-10 w-full bg-slate-400'>
           {isPlayingSong ? <Pause /> : <Play />}
        </button>
    )
}