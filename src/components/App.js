import { useState } from 'react'
import logo from '../logo.svg';
import Banner from './Banner'
import Cart from './Cart'
import Footer from './Footer'
import  ShoppingList from './ShoppingList.js'
import '../styles/Layout.css'



function App(){
  const [cart, updateCart] = useState([])

  return (
  	<div>
  		<Banner />
      <div className='lmj-layout-inner'>
    		<Cart cart={cart} updateCart={updateCart} />
    		<ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
  	</div>
  	)
}


export default App;
