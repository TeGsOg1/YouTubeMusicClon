import { usePlayerStore } from "@/store/PlayerStore";

export const SongImage = ({image, title}) => {
    return(
        <div className="w-full max-h-full h-auto grid content-center relative">
            <img 
      src={image} 
      className="animate-fade-in animate-delay-150 blur-[27px] min-w-[50px] h-auto lg:w-[700px] md:w-[600px] px-7 py-10 object-cover right-0 left-0 my-0 mx-auto -z-10 absolute" alt=""></img>
            <img 
            className="w-full h-auto lg:max-w-[700px] md:max-w-[600px]  px-7 py-10 rounded-xl object-cover mx-auto " 
            src={image} 
            alt={title} 
            />
        </div>
    )
}

export const SongLyric = ({lyric}) => {
    return(
        <div className="lyric max-w-[700px] min-w-[300px] w-full lg:block h-auto max-h-[600px] md:mb-20 lg:mb-0 justify-items-start overflow-y-auto p-5 px-10  bg-black">
            <p className=" text-white text-xl whitespace-pre-line top-0">{lyric}</p>
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