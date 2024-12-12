import PropTypes from 'prop-types'
import Button from '../../../components/button/button'

const MemberCard = ({ card }) => {
	return (
		<div className='memberCard'>
			<div className='member-card-left'>
				<div className='member-text'>
					<h2>{card.title}</h2>
					<div className='card-list'>
						{card.ComfortRelaxList.map(list => (
							<div className='list' key={list.id}>
								<img src='../../../../Method.png' alt='' />
								<p>{list.name}</p>
							</div>
						))}
					</div>
					<Button type={'filled'}>SUBSCRIBE NOW</Button>
				</div>
			</div>
			<div className='member-card-right'>
				<div className='priceCard-top'>
					<h2>{card.price}</h2>
					<span>per month</span>
				</div>
				<div className='subscriptionCard'>
					<h1>{card.subscription}</h1>
				</div>
			</div>
		</div>
	)
}

MemberCard.propTypes = {
	card: PropTypes.shape({
		title: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
		subscription: PropTypes.string.isRequired,
		ComfortRelaxList: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
			})
		).isRequired,
	}).isRequired,
}

export default MemberCard
