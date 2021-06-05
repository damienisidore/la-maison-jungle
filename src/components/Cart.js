import {useState} from 'react'
import '../styles/Cart.css'
/* Le state local est présent à l’intérieur d’un composant et garde sa valeur, 
même si l'application se re-render. On peut alors dire qu'il est stateful. */

// On déclare le state (local) car on doit déclarer une fonction pour mettre 
// à jour le state : updateCart


function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price, 
		0
	)

	function removeFromCart(name, price) {
		const currentPlant = cart.find((plant) => plant.name === name)

		const cartFiltrPlant = cart.filter(
				(plant) => plant.name !== name
			)

		if (currentPlant && currentPlant.amount > 1) {

			updateCart([
				...cartFiltrPlant, { name, price, amount: currentPlant.amount - 1 }
			])
		} else {
			updateCart([...cartFiltrPlant])
		}
	}

	return isOpen ? (
		<div className='lmj-cart'>
			<button 
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			{cart.map(({ name, price, amount }, index) =>(
				<div className='lmj-cart-item'>
					<div key={`${name}-${index}`}>
						<strong>{name}</strong> {price}€ x {amount}
					</div>
					<div>
						<button onClick={() => removeFromCart(name, price)}>Retirer</button>
					</div>
				</div>
			))}

			<h3>Total : {total}€</h3>
			<button onClick={() => updateCart([])}>Vider le panier</button>
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
