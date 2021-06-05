import { plantList } from '../datas/plantList'
import '../styles/Categories.css'

function Categories ({categories, cate, filterCate}) {
	return(
		<div className='lmj-categories'>
			Catégorie : &nbsp; 
			<select 
				value={cate} 
				onChange={(e) => filterCate(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''>toutes</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => filterCate('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories