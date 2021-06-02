import '../styles/Cart.css'
import {useState} from 'react'
/* Le state local est présent à l’intérieur d’un composant et garde sa valeur, 
même si l'application se re-render. On peut alors dire qu'il est stateful. */

// On déclare le state (local) car on doit déclarer une fonction pour mettre 
// à jour le state : updateCart


function Cart({ cart, updateCart }) {
	const monsteraPrice = 8
	const [isOpen, setIsOpen] = useState(true)

	return isOpen ? (
		<div className='lmj-cart'>
			<button 
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			<h3>Total : {monsteraPrice * cart}€</h3>
			<button onClick={() => updateCart(0)}>Vider le panier</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button 
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le panier
			</button>
		</div>
	)
}
export default Cart
