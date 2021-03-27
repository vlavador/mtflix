import './App.css';

import NavigationMenu from './components/NavigationMenu';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import PopularMovies from './components/Movie/PopularMovies';
import UpcomingMovies from './components/Movie/UpcomingMovies';
import TopRatedMovies from './components/Movie/TopRatedMovies';
import NowplayingMovies from './components/Movie/NowPlayingMovies';

import MovieDetails from './components/Movie/MovieDetails';
import AllCast from './components/Movie/AllCast';
import AllReview from './components/Movie/AllReview';
import PopularTelevision from './components/Television/PopularTelevision';
import AiringTelevision from './components/Television/AiringTelevision';
import OnAirTelevision from './components/Television/OnAirTelevision';
import TopRatedTelevision from './components/Television/TopRatedTelevision';
import TelevisionDetails from './components/Television/TelevisionDetails';
import TelevisionAllReview from './components/Television/TelevisionAllReview';
import TelevisionAllCast from './components/Television/TelevisionAllCast';
import PersonProfile from './components/Person/PersonProfile';

import Home from './components/Home';
import SkeletonMovieDetails from './components/skeletons/SkeletonMovieDetails';
import PNFound from './components/PNFound'




import Footer from './components/Footer';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <NavigationMenu />
      <Switch>
      <Route exact path='/' component={Home} />
     <Route exact path='/movie/popular/:id' component={PopularMovies} />
     <Route exact path='/movie/upcoming/:id' component={UpcomingMovies} />
     <Route exact path='/movie/toprated/:id' component={TopRatedMovies} />
     <Route exact path='/movie/nowplaying/:id' component={NowplayingMovies} />

     <Route exact path='/movie/skeleton' component={SkeletonMovieDetails}/>
      <Route exact path='/movie/:id' component={MovieDetails} />
      <Route exact path='/movie/:id/cast' component={AllCast}/>
      <Route exact path='/movie/:id/review' component={AllReview}/>

      <Route exact path='/television/popular/:id' component={PopularTelevision} />
      <Route exact path='/television/airing/:id' component={AiringTelevision} />
      <Route exact path='/television/onair/:id' component={OnAirTelevision} />
      <Route exact path='/television/toprated/:id' component={TopRatedTelevision} />
      <Route exact path='/tv/:id' component={TelevisionDetails} />
      <Route exact path='/tv/:id/cast' component={TelevisionAllCast}/>
      <Route exact path='/tv/:id/review' component={TelevisionAllReview}/>
      
      <Route exact path='/person/:id' component={PersonProfile} />     
      <Route path="*" component={PNFound}/>
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>

  
  );
}

export default App;
