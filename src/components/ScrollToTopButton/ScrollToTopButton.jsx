import { useState, useEffect } from 'react'
import './ScrollToTopButton.scss'
import { FaArrowUp } from 'react-icons/fa'
const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		isVisible && (
			<button className='scroll-button' onClick={scrollToTop}>
				<FaArrowUp />
			</button>
		)
	)
}

export default ScrollToTopButton
