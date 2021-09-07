import React,{useState, useEffect} from 'react'
import {moviesList} from './moviesList'

const Movieapp = () => {
    const [filter, setFilter] = useState([])
    const [type, setType] = useState([])
    //Filter by Rating and Search 
    //  
    let [defineType] = Object.keys(type)

    useEffect(()=>{
        setFilter(type.length === 0 ? moviesList
            : defineType === 'rating' ? 
            moviesList.filter(el => el.rating === type.rating ) :
            moviesList.filter(el => el.name.toLowerCase().includes(type.movie))  )
    },[type,moviesList])
    //destructuring
    console.log(type)
    console.log(defineType)
    console.log(filter)
    return (
        <>
        <div>
            <input type='text' placeholder='Search your movie' onChange={(e)=> setType({movie: e.target.value})}/>
            <input type='range' min={0} max={5} onChange={(e)=> setType({rating: parseInt(e.target.value)})}/>
        </div>

        {filter.map(movie => (
            <>      
                    <img src={movie.posterUrl} width='320' height='240'/>
                    <h1>{movie.name}</h1>
                    <h3>{movie.rating}</h3>
            </>
        ))}
        </>
    )
}

export default Movieapp
