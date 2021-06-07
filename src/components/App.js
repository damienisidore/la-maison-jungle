import { useState, useEffect } from 'react'
import logo from '../logo.svg';
import Banner from './Banner'
import Cart from './Cart'
import Footer from './Footer'
import  ShoppingList from './ShoppingList.js'
import '../styles/Layout.css'



function App(){

  // On utilise JSON.stringify pour mettre l'objet 'cart' sous forme de string
  // Puis on utilise JSON.parse pour le remettre sous forme d'objet JavaScript
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  /* useEffectpermet d'effectuer des effets : cela permet à notre composant d'exécuter 
  des actions après l'affichage, en choisissant à quel moment cette action doit être 
  exécutéeLe hook  useEffect   est appelé après chaque render de mon composant. 
  Il est possible de préciser quelle modification de donnée déclenche les effets 
  exécutés dans useEffect, avec le tableau de dépendances [] : ici [total] donc à 
  fois que le total du panier est modifié */
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


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
