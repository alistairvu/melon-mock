interface songAction {
  type: "NEW_SONG"
  payload: songState
}

const initialState: songState = {
  artist: null,
  title: null,
  image: undefined,
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
