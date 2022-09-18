import './App.css';
import Rows from './Rows';
import requests from './requests';
import Nav from './Nav';
import Banner from './Banner';

function App() {
  return (
    <div className="app">
      <Nav />
     <Banner />
     <Rows title="NETFLIX ORIIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLarge />
     <Rows title="Trending" fetchUrl={requests.fetchTrending} />
     <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
     <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
