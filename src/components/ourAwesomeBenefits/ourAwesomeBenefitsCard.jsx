import PropTypes from 'prop-types'
import Paragraph from '../paragraph/paragraph'

const OurAwesomeBenefitsCard = ({card}) => {
	return (
		<div className='card'>
			<div className="card-image">
				<img src="../../../public/awesomeBenefitsImage/Icons.png" alt="" />
			</div>
			<div className="card-text">
				<h2>{card.title}</h2>
				<Paragraph>{card.description}</Paragraph>
			</div>
		</div>
	)
}

OurAwesomeBenefitsCard.propTypes = {
	card: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string
	})
}

export default OurAwesomeBenefitsCard