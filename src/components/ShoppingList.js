import {useState} from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories.js'
import '../styles/ShoppingList.css'

/* reduce() pour récupérer chaque catégorie une fois. ex : dans un tableau
il y a plusieurs item, chaque item a une catégorie mais plusieurs items 
peuvent avoir la même catégorie. En tout il y a 3 catégories. 
reduce() va afficher les 3 catégories */
function ShoppingList({ cart, updateCart }) {
	const [cate, filterCate] = useState('') // Ici le state est un string d'où les ''
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)

		if (currentPlantAdded) {
			/* La méthode filter() crée et retourne un nouveau tableau contenant tous 
			les éléments du tableau d'origine qui remplissent une condition déterminée
			par la fonction callback. 
			Donc on crée un nouveau tableau sans la plante, on le met dans updateCart
			On ajoute dans ce tableau un objet avec la quantité précédente à laquelle on ajoute 1
			Tout ça car IL NE FAUT PAS MODIFIER LE STATE DIRECTEMENT, MAIS CRÉER UN NOUVEL OBJET
			Pour en savoir plus : https://blog.eleven-labs.com/fr/vous-utilisez-mal-les-states-react/ */
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				/* Le spread operator ... nous permet de récupérer un tableau déjà existant déjà existant, 
				et là de lui ajouter un nouvel objet*/
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1}
			])
		} else {
			updateCart([...cart, { name, price, amount: 1}])
		}
	}


	return (
		<div className='lmj-shopping-list'>
			<Categories 
				categories={categories}
				cate={cate} 
				filterCate={filterCate} 
			/>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) => 
					!cate || cate === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
