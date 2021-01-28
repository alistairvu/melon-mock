import { getToken } from "./utils"

export const getChart = async () => {
  try {
    const token = await getToken()
    const res = await fetch(
      "https://api.spotify.com/v1/playlists/6kbzPEHj3uMPRFsR3v6xzE/tracks?market=VN&fields=items(track(album(images%2Cname%2Crelease_date%2Cartists)%252Cartists(name)%252Cname%252Cid))",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    const json = await res.json()
    const rawData = await json.items
    const songData: Array<songData> = rawData.map((item: any) => {
      const { album, artists, name } = item.track
      return {
        title: name,
        albumArtist: album.artists.map((x: { name: any }) => x.name).join(", "),
        artist: artists.map((x: { name: any }) => x.name).join(", "),
        image: album.images[0].url,
        albumName: album.name,
        releaseDate: album["release_date"],
        albumId: album.id,
      }
    })
    return songData
  } catch (error) {
    console.log(error)
  }
}
