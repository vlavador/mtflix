import './App.css';

import NavigationMenu from './components/NavigationMenu';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import PopularMovies from './components/Movie/PopularMovies';
import MovieDetails from './components/Movie/MovieDetails';
import PersonProfile from './components/Person/PersonProfile';
import AllCast from './components/Movie/AllCast';
import AllReview from './components/Movie/AllReview';
import Home from './components/Home';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
    {/**<NavigationMenu /> */}
      <Switch>
      <Route exact path='/' component={Home} />
     <Route exact path='/movie/popular/:id' component={PopularMovies} />
      <Route exact path='/movie/:id' component={MovieDetails} />
      <Route exact path='/movie/:id/cast' component={AllCast}/>
      <Route exact path='/movie/:id/review' component={AllReview}/>
      <Route exact path='/person/:id' component={PersonProfile} />


      </Switch>
    </div>
  </BrowserRouter>

  
  );
}

export default App;
