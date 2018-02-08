import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import RecipeIndexContainer from './containers/RecipeIndexContainer'
import RecipeShowContainer from './containers/RecipeShowContainer'


const App = (props) => {

return(
  <Router history={browserHistory}>
    <Route path='/' component={ RecipeIndexContainer } />
    <Route path='/recipes' component={ RecipeIndexContainer } />
    <Route path='/recipes/new' component={ RecipeIndexContainer } />
    <Route path='/recipes/:id' component={ RecipeShowContainer } />
  </Router>
)}

export default App
