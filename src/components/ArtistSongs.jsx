import { songs } from "@/lib/songData"
import { artists } from "@/lib/artistData"
import { CardPlayButton } from "@/components/PlayButtonCard"


export const ArtistSongs = ({ id }) => {
    const artist = artists.find((artist) => artist.id === id)
    const artistSongs = songs.filter((song) => song.artists === artist.name)
    return (
        <ul className="w-full">
            {artistSongs.map((song) => (
                <li className="flex w-full items-center gap-4" key={song.id}>
                    <div className="relative size-14">
                            <CardPlayButton padding="p-3" id={song.id} />
                        <img src={song.image} className=" size-14" alt={song.title} />
                    </div>
                    <div className=" w-96 justify-between flex">
                        <h1 className="text-white text-xl" >{song.title}</h1>
                    </div>
                </li>
            ))}
        </ul>
    )
}