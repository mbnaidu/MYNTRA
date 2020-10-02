import { createStore } from 'redux'
import { MenImages,initialState } from './menImages'

export const configureStore = () =>{
    const store = createStore(
        MenImages,
        initialState
    )
    return store;
}