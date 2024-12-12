import PropTypes from 'prop-types'
import './ourStories.scss'

const OurStoriesCard = ({ card, changeCardClick }) => {
	return (
		<div className='card'>
			<div className='card-image cursor-pointer' onClick={changeCardClick}>
				<img src={card.url} alt='' />
			</div>
			<div className='card-text'>
				<div className='card-date-and-author'>
					<span>{card.data}</span>
					<div className='line'></div>
					<span>{card.author} </span>
				</div>
				<h2>{card.title}</h2>
				<p>{card.description}</p>
			</div>
		</div>
	)
}

OurStoriesCard.propTypes = {
	card: PropTypes.shape({
		data: PropTypes.string,
		author: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		url: PropTypes.string,
	}),
	changeCardClick: PropTypes.any,
}

export default OurStoriesCard
