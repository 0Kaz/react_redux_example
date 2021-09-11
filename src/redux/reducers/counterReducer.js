import {DECREMENT, INCREMENT} from '../constants/index'



export const counterReducer = (state , action) => {
    
    if (action.type === INCREMENT) { 
        return {count: state.count +1 }
    }

    if (action.type === DECREMENT) {
        return {count: state.count - 1 }
    }

    return state 

}

export default counterReducer