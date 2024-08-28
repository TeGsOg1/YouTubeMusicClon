import { usePlayerStore } from "@/store/PlayerStore";

export const SongImage = ({image, title}) => {
    return(
        <div className="w-full h-full flex justify-center items-center p-10 relative">
            <img 
                src={image} 
                alt={`${title} blurred image`}
                className="animate-fade-in animate-delay-150 blur-[27px] h-full w-full max-w-[800px] max-h-[800px] object-contain right-0 left-0 my-0 p-10 mx-auto -z-10 absolute"></img>
            <picture className="w-full h-full justify-center items-center flex">
                <img 
                className=" object-contain rounded-xl w-full h-full max-w-[700px] max-h-[700px]" 
                src={image} 
                alt={`${title} image`} 
                />
            </picture>
        </div>
    )
}

export const SongLyric = ({lyric}) => {
    return(
        <div className="flex justify-center items-center max-h-[650px] min-h-[200px] h-full w-full">
            <article className="h-full w-full md:mb-20 lg:mb-0 justify-items-start overflow-y-auto py-5 bg-black">
                <p className=" text-white text-xl whitespace-pre-line top-0">{lyric}</p>
            </article>
        </div>
    )
}

export const PlayerOpenDesk = () => {
    const { currentMusic, isPlayerOpen } = usePlayerStore();

    const playerDesk = isPlayerOpen ? 'playerDesk Open' : 'playerDesk';
    return(
        <div className={playerDesk} >
                <SongImage {...currentMusic.song} />
                <SongLyric {...currentMusic.song} />
        </div>
    )
}