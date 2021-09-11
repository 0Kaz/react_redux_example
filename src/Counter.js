
// import {connect} from 'react-redux'
import React  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment ,decrement} from './redux/actions/action-types'
//CREATE YOUR STATE 
//IT IS A FUNCTION INDEED
//AND THE ENGLISH IS CLEAR, WE TRANSFORM A STATE INTO A PROPS BY 
//GETTING THE STATE FROM REDUX
// const mapStateToProps = (state) => {
//     return { count: state.count}
// }

// //A DISPATCH IS THE ONE RESPONSIBLE FOR 'DISPATCHING' the types
// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: ()=> dispatch(increment()), 
//         decrement: ()=>dispatch(decrement())
//     }
// }

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)
    return (
        <div>
            <button onClick={()=> dispatch(decrement())}>Appauvrir MBAYE</button>
                {count}
            <button onClick={()=>dispatch(increment())}>ENRICHIR MBAYE</button>
        </div>
    )
}

// export default connect(mapStateToProps,mapDispatchToProps)(Counter)
export default Counter