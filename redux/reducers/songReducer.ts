interface songState {
  artist: string | null
  title: string | null
  image: string | null
  albumName: string | null
  releaseDate: string | null
  albumId: string | null
}

interface songAction {
  type: "NEW_SONG"
  payload: songState
}

const initialState: songState = {
  artist: null,
  title: null,
  image: null,
  albumName: null,
  releaseDate: null,
  albumId: null,
}

const songReducer = (state: songState = initialState, action: songAction) => {
  const { type, payload } = action

  switch (type) {
    case "NEW_SONG":
      return payload
    default:
      return state
  }
}

export default songReducer
