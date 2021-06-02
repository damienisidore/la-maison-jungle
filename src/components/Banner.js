import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation.js'

function Banner(){
	const title = 'La Maison Jungle'
	return (
		<div className='lmj-banner'>
			<div className='lmj-banner-row'>
				<img src={logo} alt='logo La Maison Jungle' className='lmj-logo' />
				<h1 className='lmj-title'>{title}</h1>
			</div>
			<Recommendation />
		</div>
	)
}

export default Banner