import { combineReducers } from "redux"
import songReducer from "./songReducer"
import statusReducer from "./statusReducer"

const rootReducer = combineReducers({
  song: songReducer,
  status: statusReducer,
})

export type rootState = ReturnType<typeof rootReducer>
export default rootReducer
