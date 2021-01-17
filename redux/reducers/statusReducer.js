const initialState = {
  playing: true,
  shuffle: false,
  loop: 0,
}

const statusReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case "SET_PLAY":
      return { ...state, playing: payload }
    case "FLIP_PLAY":
      return { ...state, playing: !state.playing }
    case "FLIP_SHUFFLE":
      return { ...state, shuffle: !state.shuffle }
    case "FLIP_LOOP":
      return { ...state, loop: (state.loop + 1) % 3 }
    default:
      return state
  }
}

export default statusReducer
