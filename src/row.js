import React,{useEffect,useState} from 'react'
import instance from './axios';
import './row.css'
const baseUrl = "https://image.tmdb.org/t/p/original"
function Row({title,fetchUrl,isLarge}) {

    const [movies,setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const movies = await instance.get(fetchUrl);
            setMovies(movies.data.results)
        }
        fetchData();
        
    }, [fetchUrl])
    return (
        <div className='row'>
            <h2 style={{color:'white'}} >{title}</h2>
            <div className="row-posters">
                {movies.map(movie => (
                    <img key={movie.id} className={`row-poster ${isLarge && 'row_posterLarge'}` }  src={`${baseUrl}${ isLarge?movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
                )) }
            </div>
        </div>
    )
}

export default Row
