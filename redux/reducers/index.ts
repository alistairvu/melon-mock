import { combineReducers } from "redux"
import songReducer from "./songReducer"
import statusReducer from "./statusReducer"

const rootReducer = combineReducers({
  song: songReducer,
  status: statusReducer,
})

export default rootReducer
