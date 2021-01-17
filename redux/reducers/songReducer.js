const initialState = {
  artist: null,
  title: null,
  image: null,
  albumName: null,
  releaseDate: null,
  albumId: null,
}

const songReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case "NEW_SONG":
      return payload
    default:
      return state
  }
}

export default songReducer
