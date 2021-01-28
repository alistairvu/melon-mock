import { getToken } from "./utils"

export const getNewReleases = async () => {
  try {
    const token = await getToken()
    const res = await fetch(
      `https://api.spotify.com/v1/browse/new-releases?country=VN&offset=0&limit=20`,
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
    const { albums } = json
    const rawData = albums.items
    const data = rawData.map(
      (item: any): albumData => {
        const { artists, id, images, name, release_date } = item
        return {
          artist: artists.map((x: any) => x.name).join(", "),
          image: images[0].url,
          albumName: name,
          releaseDate: release_date,
          albumId: id,
        }
      }
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
