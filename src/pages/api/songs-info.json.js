import { allPlaylists, songs as allSongs } from "@/lib/data";
import { APIRoute } from "astro"

export const GET: APIRoute = async ({ params, request }) => {
    const { url } = request
    const urlObject = new URL(url)
    const id = urlObject.searchParams.get('id')
  
    const song = allSongs.find((song: { id: string; }) => song.id === id)

    return new Response(JSON.stringify({ song }))
}
