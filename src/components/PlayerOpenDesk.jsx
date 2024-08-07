import { usePlayerStore } from "@/store/PlayerStore";

export const SongImage = ({image, title}) => {
    return(
        <div className="w-full max-h-full h-auto grid content-center p-10 relative">
            <img 
                src={image} 
                alt={`${title} blurred image`}
                className="animate-fade-in animate-delay-150 blur-[27px] min-w-[50px] h-auto lg:w-[730px] md:w-[590px] object-cover right-0 left-0 my-0 p-10 mx-auto -z-10 absolute"></img>
            <img 
                className="w-full h-full lg:max-w-[650px] md:max-w-[500px] rounded-xl object-cover mx-auto " 
                src={image} 
                alt={`${title} image`} 
            />
        </div>
    )
}

export const SongLyric = ({lyric}) => {
    return(
        <div className="h-full w-full grid content-center py-10">
            <article className="max-w-[700px] min-w-[300px] w-full lg:block max-h-[600px] h-full min-h-[300px] md:mb-20 lg:mb-0 justify-items-start overflow-y-auto p-5 px-10  bg-black">
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