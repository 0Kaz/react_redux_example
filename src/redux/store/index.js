import {createStore} from 'redux'
import {counterReducer} from '../reducers/counterReducer'

const initialState = { 
    count: 15000000 
}

const store = createStore(counterReducer, initialState)

export default store