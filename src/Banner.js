import React,{ useState ,useEffect} from 'react'
import instance from './axios';
import requests from './request';
import './banner.css'

function Banner() {
    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const movies = await instance.get(requests.fetchNetflixOriginals);
            setMovie(
                movies.data.results[ Math.floor( Math.random() * movies.data.results.length -1 ) ]
            )
        }
        fetchData();
    }, [])
    console.log(movie.backdrop_path)
    return (
        <header className="banner" style={  {  backgroundSize:"cover",
            backgroundImage : `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
            ,backgroundPosition:"center center"  }   }>
            <div className="banner-contents">
                <h1 className='banner_title' > {movie?.title || movie?.name  || movie?.original_name } </h1>
                <div className="banner_buttons">
                        
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner_description">
                    {movie?.overview}
                </h1>
            </div>
            <div className='banner_bottom' />
        </header>
    );
}

export default Banner
