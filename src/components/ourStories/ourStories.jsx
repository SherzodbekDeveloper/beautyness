import SectionHeading from '../sectionHeading/sectionHeading'
import { lastStories } from '../../constants'
import './ourStories.scss'
import OurStoriesCard from './ourStoriesCard.jsx'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const OurStories = ({ section }) => {
	const [showAll, setShowAll] = useState(false)
	const { id } = useParams()
	const navigate = useNavigate()

	const changeCardClick = cardId => {
		if (id == '/blog') {
			navigate(`blog-single/${cardId}`)
		} else {
			navigate(`/blog/blog-single/${cardId}`)
		}
	}

	function ChangeSetShowAll() {
		setShowAll(showAll => !showAll)
	}
	return (
		<section className='latest-updates-section'>
			<div className='container-1200'>
				{section ? (
					<SectionHeading title='Our Blog' descr='Latest Updates' />
				) : (
					''
				)}
				<div className='latest-updates-section-container'>
					<div className='latest-updates-container'>
						{lastStories
							.slice(0, showAll ? lastStories.length : 3)
							.map(card => (
								<OurStoriesCard
									card={card}
									key={card.id}
									changeCardClick={() => changeCardClick(card.id)}
								/>
							))}
					</div>
					<button className='btn-unfilled' onClick={ChangeSetShowAll}>
						VIEW MORE STORIES
					</button>
				</div>
			</div>
		</section>
	)
}

OurStories.propTypes = {
	section: PropTypes.bool,
}

export default OurStories
