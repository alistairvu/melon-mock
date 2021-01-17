const initialState = {
  artist: "Olivia Rodrigo",
  title: "drivers license",
  image: "https://i.scdn.co/image/ab67616d0000b27359779689e1d9c15ca2f76b84",
  albumName: "drivers license",
  releaseDate: "2021-01-08",
  albumId: "66FPnVL9G4CMKy3wvaGTcr",
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
