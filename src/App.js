import requests from './request';
import './App.css';
import Row from './row'
import Nav from './Nav'
import Banner from './Banner';

function App() {
  return (
    <div className="App">
        <Nav />
        <Banner />
        <Row title='Netflix originals' fetchUrl={requests.fetchNetflixOriginals} isLarge={true} />
        <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
