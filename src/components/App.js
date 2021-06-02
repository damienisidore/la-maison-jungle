import logo from '../logo.svg';
import '../App.css';
import Banner from './Banner'
import Cart from './Cart'
import Footer from './Footer'
import  ShoppingList from './ShoppingList.js'
import {useState} from 'react'


function App(){
  const [cart, updateCart] = useState([])

  return (
  	<div>
  		<Banner />
  		<Cart cart={cart} updateCart={updateCart} />
  		<ShoppingList cart={cart} updateCart={updateCart} />
      <Footer />
  	</div>
  	)
}


export default App;
