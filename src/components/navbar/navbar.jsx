import { FiPhoneCall } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'
import { GrLinkedinOption } from 'react-icons/gr'
import { LuCalendar } from 'react-icons/lu'
import './navbar.scss'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { SlMenu } from 'react-icons/sl'
import { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false)
	const location = useLocation()

	const showMenuTabs = () => {
		setShowMenu(showMenu => !showMenu)
	}

	useEffect(() => {
		setShowMenu(false)
	}, [location.pathname])

	const navigate = useNavigate()
	const changeRoute = e => {
		const route = e.target.value
		if (route) navigate(route)
	}

	return (
		<header>
			<div className='custom-container m-auto p-8'>
				<div className='header-container flex items-center justify-between gap-2.5'>
					<div className='header-left flex gap-12'>
						<div className='logo'>
							<img src='/Logo.svg' alt='' />
						</div>
						<div className='call-number flex items-center gap-3'>
							<p>
								<FiPhoneCall />
							</p>
							<span className='bold'> Call Us - (+22) 123 456 7890</span>
						</div>
					</div>
					<div className='header-right flex items-center gap-8'>
						<ul
							className={`ul-list ${
								showMenu ? 'active' : ''
							} flex items-center gap-8`}
						>
							<li>
								<NavLink to={'/'}>Home</NavLink>
							</li>
							<li>
								<select onClick={changeRoute}>
									<option value='locations'>Locations</option>
									<option value='team'>Team</option>
									<option value='blog'>Blog</option>
								</select>
							</li>
							<li>
								<NavLink
									className={({ isActive }) => (isActive ? 'true' : '')}
									to={'/about'}
								>
									About
								</NavLink>
							</li>
							<li>
								<NavLink to={'/services'}>Services</NavLink>
							</li>
							<li>
								<NavLink to={'/contact'}>Contact</NavLink>
							</li>
							<li>
								<a href=''>
									<FaFacebookF />
								</a>
							</li>
							<li>
								<a href=''>
									<FaTwitter />
								</a>
							</li>
							<li>
								<a href=''>
									<GrLinkedinOption />
								</a>
							</li>
							<li>
								<span className='bold none'> Call Us - (+22) 123 456 7890</span>
							</li>
							<button className='close' id='close' onClick={showMenuTabs}>
								<IoMdClose />
							</button>
						</ul>
						<button className='navbar-button flex gap-3 items-center p-4 px-8 bg-[rgba(122,156,165,1)] text-white bold'>
							<LuCalendar />
							RESERVATION
						</button>
						<button className='menu' id='menu' onClick={showMenuTabs}>
							<SlMenu />
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar
