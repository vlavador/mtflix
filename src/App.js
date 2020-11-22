import './App.css';

import NavigationMenu from './components/NavigationMenu';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import PopularMovies from './components/Movie/PopularMovies';
import MovieDetails from './components/Movie/MovieDetails';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
    <NavigationMenu /> 
      <Switch>
      <Route exact path='/' component={PopularMovies} />
      <Route exact path='/movie/:id' component={MovieDetails} />

      </Switch>
    </div>
  </BrowserRouter>

  
  );
}

export default App;
