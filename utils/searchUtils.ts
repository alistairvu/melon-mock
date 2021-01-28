import { getToken } from "./utils"

const getSongs = async (query: string) => {
  try {
    const token = await getToken()
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=track`,
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
    const rawData = await json.tracks.items
    const songData: Array<songData> = rawData.map((item: any) => {
      const { album, artists, name } = item
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

const getAlbums = async (query: string) => {
  try {
    const token = await getToken()
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=album`,
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
    const rawData = await json.albums.items

    const albumData: Array<albumData> = rawData.map((item: any) => {
      const { artists, images, name, release_date, id } = item
      return {
        artist: artists.map((x: { name: string }) => x.name).join(", "),
        image: images[0].url,
        albumName: name,
        releaseDate: release_date,
        albumId: id,
      }
    })
    return albumData
  } catch (error) {
    console.log(error)
  }
}

const getArtists = async (query: string) => {
  try {
    const token = await getToken()
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=artist`,
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
    const rawData = await json.artists.items

    const artistData: Array<artistData> = rawData.map((item: any) => {
      return {
        name: item.name,
        id: item.id,
        image:
          item.images.length > 0
            ? item.images[0]["url"]
            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      }
    })
    return artistData
  } catch (error) {
    console.log(error)
  }
}

export { getSongs, getAlbums, getArtists }
