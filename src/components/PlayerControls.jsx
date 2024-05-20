import { usePlayerStore } from "@/store/PlayerStore";
import { Pause, Play } from "./Player";

export function PlayerMobile() {
    
    const { isPlaying, setIsPlaying } = usePlayerStore(state  => state)

    const handleTouch = () => {
        setIsPlaying(!isPlaying)
    }
    
    return(
        <div className="z-20 mt-10 ">
            <button onClick={handleTouch} className=" size-14">
                {isPlaying ? <Pause/> : <Play/>}
            </button>
        </div>
    )
}