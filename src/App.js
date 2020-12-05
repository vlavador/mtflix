import './App.css';

import NavigationMenu from './components/NavigationMenu';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import PopularMovies from './components/Movie/PopularMovies';
import MovieDetails from './components/Movie/MovieDetails';
import PersonProfile from './components/Person/PersonProfile';
import AllCast from './components/Movie/AllCast';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
    {/**<NavigationMenu /> */}
      <Switch>
      <Route exact path='/' component={PopularMovies} />
      <Route exact path='/movie/:id' component={MovieDetails} />
      <Route exact path='/movie/:id/cast' component={AllCast}/>
      <Route exact path='/person/:id' component={PersonProfile} />


      </Switch>
    </div>
  </BrowserRouter>

  
  );
}

export default App;
