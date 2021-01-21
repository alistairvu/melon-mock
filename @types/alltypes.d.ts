declare module "react-native-options-menu"
declare module "../secrets"

interface songData {
  artist: string | null
  albumArtist?: string | null
  title: string | null
  image: string | undefined
  albumName: string | null
  releaseDate: string | null
  albumId: string | null
}

interface albumData {
  artist: string | null
  image: string | undefined
  albumName: string | null
  releaseDate: string | null
  albumId: string
}

interface statusState {
  playing: boolean
  shuffle: boolean
  loop: 0 | 1 | 2
  playValue: number
}

interface rootState {
  song: songData
  status: statusState
}

interface artistData {
  name: string
  image: string
  id: string
}
