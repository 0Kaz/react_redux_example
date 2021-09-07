import MovieApp from './MovieApp'
import {useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Product from './Components/Product'
import PrivateRoute from './Components/PrivateRoute'
import Secret from './Components/Secret'
const App = () => {

  const [auth, setAuth] = useState(true)

  const changeAuth = () => {
    setAuth(!auth)
  }
  const products = [
    {id:1,name:'Coffee', description:'Nicest coffee brand'},
    {id:2, name: 'Tshirt', description:'Expensive Tshirt you might not need'},
    {id:3, name: 'White chocolaaaaaate', description:"I am going to eat this alone after this."}
  ]
  return (
    // <MovieApp/>
    <>
      <Navbar/>
  
    
    <Switch>
    <Route path='/' exact>
        <Home changeAuth={changeAuth} auth={auth}/>
      </Route>

      <Route path='/products' exact>
       <Products data={products}/>
      </Route>

      <Route path='/products/:id'  exact>
        <Product data={products}/>
      </Route>

      <PrivateRoute auth={auth} >
        <Secret/>
      </PrivateRoute>
    </Switch>
  
    </>
  );
}

export default App;
