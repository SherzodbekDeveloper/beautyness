import PropTypes from 'prop-types'
import Button from '../../../components/button/button'
import Paragraph from '../../../components/paragraph/paragraph';

const OurBlogCard = ({ card,  }) => {
	return (
		<div className='card flex flex-col gap-7'>
			<div className='card-image'>
				<img src={card.url} alt='' />
			</div>
			<div className='card-text'>
				<h2> {card.title}</h2>
				<Paragraph>{card.description}</Paragraph>
				<Button NavigateName={'/about'} type={'unfilled'}>Read More</Button>
			</div>
		</div>
	)
}

OurBlogCard.propTypes = {
	card: PropTypes.shape({
		url: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}),
}

export default OurBlogCard
