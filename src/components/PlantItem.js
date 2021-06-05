import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(e) {
	alert(`Vous allez acheter ${e}`)
}
// C'est ici que tu construit l'élément type de la liste. Les props sont id, cover, name, water, light
function PlantItem({ id, cover, name, water, light, price }) {
	return (
		<li key={id} className='lmj-plant-item'>
			<div>
				<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} onClick={() => handleClick(name)} />
			</div>
			<div>
				{name}
			</div>
			<div className='price-n-care'>
				<div>
					<CareScale careType='water' scaleValue={water} />
					<CareScale careType='light' scaleValue={light} />
				</div>
				<div className='price-display'>
				 	{price}€
				</div>
			</div>
		</li>
	)
}

export default PlantItem
