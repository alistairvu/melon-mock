const initialState = {
  artist: "Olivia Rodrigo",
  title: "drivers license",
  image:
    "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/9d/56/72/9d56724b-501d-83e9-a53a-e0bf1ebb83a1/20UM1IM14285.rgb.jpg/200x200bb.png",
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
