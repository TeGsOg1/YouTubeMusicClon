import {  songs as allSongs } from "@/lib/songData";

export async function GET({ params, request }) {
    const { url } = request
    const urlObject = new URL(url)
    const id = urlObject.searchParams.get('id')
  
    const song = allSongs.find((song) => song.id === id)
    const songs = allSongs.filter(song => song.albumId === song?.albumId)

    return new Response(JSON.stringify({ song, songs }), {
      headers: { "content-type": "application/json" },
    })
  }