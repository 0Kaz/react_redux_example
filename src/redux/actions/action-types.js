import {DECREMENT, INCREMENT} from '../constants/index'


export const increment = () => { 
    return {type: INCREMENT}
}

export const decrement = () => { 
    return {type: DECREMENT}
}