declare module "react-native-options-menu"
declare module "../secrets"

interface songState {
  artist: string | null
  title: string | null
  image: string | undefined
  albumName: string | null
  releaseDate: string | null
  albumId: string | null
}

interface albumData {
  artist: string | null
  image: string | null
  albumName: string | null
  releaseDate: string | null
  albumId: string | null
}

interface statusState {
  playing: boolean
  shuffle: boolean
  loop: 0 | 1 | 2
  playValue: number
}

interface rootState {
  song: songState
  status: statusState
}
