import { Link } from 'react-router-dom'
import './Hero.css'

import HeroVideo from '../assets/video.mp4'

const Hero = () => {
	return (
		<div className='hero'>
			<video autoPlay loop muted>
				<source src={HeroVideo} type='video/mp4' />
			</video>
			<div className='hero-content'>
				<h1>Space And Galaxy Travel!</h1>
				<p>World's First Civilian Space Travel.</p>
			</div>
			<div>
				<Link to='/training' className='btn'>
					Training
				</Link>
				<Link to='/training' className='btn btn-light'>
					Launch
				</Link>
			</div>
		</div>
	)
}

export default Hero
