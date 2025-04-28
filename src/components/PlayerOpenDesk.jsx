import { usePlayerStore } from "@/store/PlayerStore";

export const SongImage = ({image, title}) => {
    return(
        <div className="w-full h-full flex justify-center items-center p-10 relative">
            <img 
                src={image} 
                alt={`${title} blurred image`}
                className="animate-fade-in animate-delay-150 blur-[27px]  h-full w-full max-w-[800px] max-h-[800px] object-contain right-0 left-0 my-0 p-10 mx-auto -z-10 absolute"></img>
            <picture className="w-full h-full justify-center items-center flex">
                <img 
                className=" object-contain size-[200px] lg:w-full lg:h-full lg:max-w-[700px] lg:max-h-[700px]" 
                src={image} 
                alt={`${title} image`} 
                />
            </picture>
        </div>
    )
}

export const SongLyric = ({lyric}) => {
    return(
        <div className="flex flex-col justify-center items-center h-full w-full">
            <h1 className="font-semibold text-3xl text-center text-white my-4 ">Letra</h1>
            <article className="flex justify-items-start overflow-y-auto p-5 mb-6 bg-black">
                <p className=" text-white text-md lg:text-xl whitespace-pre-line top-0">{lyric}</p>
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