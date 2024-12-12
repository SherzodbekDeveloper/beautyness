import PropTypes from 'prop-types'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { RiLinkedinFill } from 'react-icons/ri'
import Paragraph from '../../../components/paragraph/paragraph'

const MeetOurExpertsCard = ({ card, onClick }) => {
	return (
		<div className='card '>
			<div className='card-image cursor-pointer' onClick={onClick}>
				<img src={card.url} alt='' />
			</div>
			<div className='card-text'>
				<h2>{card.name}</h2>
				<span>{card.situation}</span>
				<Paragraph>{card.description}</Paragraph>
				<div className='social-medias'>
					<a href=''>
						<FaFacebookF />
					</a>
					<a href=''>
						<FaTwitter />
					</a>
					<a href=''>
						<RiLinkedinFill />
					</a>
				</div>
			</div>
		</div>
	)
}

MeetOurExpertsCard.propTypes = {
	card: PropTypes.shape({
		name: PropTypes.string,
		url: PropTypes.string,
		situation: PropTypes.string,
		description: PropTypes.string,
	}),
	onClick: PropTypes.func.isRequired,
}

export default MeetOurExpertsCard
