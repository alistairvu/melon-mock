interface songAction {
  type: "NEW_SONG"
  payload: songData
}

const initialState: songData = {
  artist: null,
  albumArtist: null,
  title: null,
  image: undefined,
  albumName: null,
  releaseDate: null,
  albumId: null,
}

const songReducer = (state: songData = initialState, action: songAction) => {
  const { type, payload } = action

  switch (type) {
    case "NEW_SONG":
      return payload
    default:
      return state
  }
}

export default songReducer
