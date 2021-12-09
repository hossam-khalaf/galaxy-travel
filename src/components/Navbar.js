import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)

	return (
		<header className='header'>
			<div className='logo'>
				<Link to='/'>
					<img src={Logo} alt='pspase logo' />
				</Link>
			</div>
			<nav className='navbar'>
				<ul className={click ? 'nav-items active' : 'nav-items'}>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/pricing'>Pricing</Link>
					</li>
					<li>
						<Link to='/training'>Training</Link>
					</li>

					<li>
						<Link to='contact'>Contact</Link>
					</li>
				</ul>
				<div className='mobile-menu' onClick={handleClick}>
					{click ? (
						<FaTimes style={{ color: '#fff', fontSize: '2rem' }} />
					) : (
						<FaBars style={{ color: '#fff', fontSize: '2rem' }} />
					)}
					{/* <FaTimes style={{ color: '#fff' }} /> */}
				</div>
			</nav>
		</header>
	)
}

export default Navbar
