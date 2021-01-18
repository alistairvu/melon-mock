interface statusAction {
  type: "SET_PLAY" | "FLIP_PLAY" | "FLIP_SHUFFLE" | "FLIP_LOOP" | "SET_PLAY_VAL"
  payload?: boolean
}

const initialState: statusState = {
  playing: true,
  shuffle: false,
  loop: 0,
  playValue: 0,
}

const statusReducer = (
  state: statusState = initialState,
  action: statusAction
) => {
  const { type, payload } = action

  switch (type) {
    case "SET_PLAY":
      return { ...state, playing: payload }
    case "SET_PLAY_VAL":
      return { ...state, playValue: payload }
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
