import { combineReducers, createStore } from "redux";

import profileReducer from "./profileReducer";
import dialogueReducer from "./dialogueReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguePage: dialogueReducer
})

let store = createStore(reducers) 
export default store;
