import './Counter.css'
import React,{useState, useEffect} from 'react'

const movieList = [{
    id:1,
    name: 'Citizen Kane',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg',
    rating: 4
},{
    id:2,
    name: 'Interstellar',
    image: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    rating: 5
},{
    id:3,
    name: 'Stalker',
    image: 'https://i.pinimg.com/originals/22/ae/b9/22aeb9bbdc9f6954b69cc69ca36a81de.png',
    rating: 5
}]


const Counter = () => {
    // const [counter, setCounter] = useState(0)
    const [moviesFilter, setMoviesFilter] = useState([])
    const [movieSearch, setMovieSearch] = useState('')

    // const increment = () => {
    //     setCounter(counter+1)
    // }

    // const decrement = () => {
    //     setCounter(counter-1)
    // }

    useEffect(()=>{
        setMoviesFilter(movieList.filter(movie => (movie.name.includes(movieSearch)), movieList))
    },[movieSearch])
    // CE CONCENTRE UNIQUEMENT SUR LES CHANGEMENTS 
    // SI J'UTILISE UN EVENT, ONCLICK, ONCHANGE, USEEFFECT DOIT CIBLER LE CHANGEMENT
    //re-rendering 
    //()=>{}


    return (
        <div className='counter-container'>
            {/* <button onClick={decrement}>-</button>
            <h1>{counter}</h1>
            <button onClick={increment}>+</button> */}


            <div className="movies-container">
                <input type='text' onChange={(e)=> setMovieSearch(e.target.value)}/>

                <div className="movie-list">
                        {moviesFilter.map( movie => (
                            <>
                            <img src={movie.image}></img>
                            <h1>{movie.name}</h1>
                            <h3>Rating: {movie.rating}</h3>
                            </>
                        ))}
                </div>
            </div>

            
        </div>
    )
}

export default Counter
