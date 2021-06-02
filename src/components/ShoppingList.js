import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import {useState} from 'react'

/* reduce() pour récupérer chaque catégorie une fois. ex : dans un tableau
il y a plusieurs item, chaque item a une catégorie mais plusieurs items 
peuvent avoir la même catégorie. En tout il y a 3 catégories. 
reduce() va afficher les 3 catégories */
function ShoppingList({ cart, updateCart }) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<div id={id}>
						<PlantItem
							id={id}
							cover={cover}
							name={name}
							water={water}
							light={light}
						/>
						<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
