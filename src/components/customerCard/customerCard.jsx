import './customerCard.scss'
import PropTypes from 'prop-types'
import RateFunction from '../rateFunction/rateFunction'
const CustomerCard = ({ card }) => {
	return (
		<div className='card'>
			<div className='card-text'>
				<p>{card.description}</p>
			</div>
			<div className='card-info flex  items-center'>
				<div className='about-customer flex justify-between w-full'>
					<div className='customer-info flex gap-5 '>
						<div className='customer-image'>
							<img src={card.url} alt='' />
						</div>
						<div className='about-person'>
							<RateFunction rate={card.rate} />
							<h2>{card.name}</h2>
							<span>{card.country}</span>
						</div>
					</div>
					<div className='icon'>
						<img src='./customersIcon/Icon.png' alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

CustomerCard.propTypes = {
	card: PropTypes.shape({
		url: PropTypes.node,
		description: PropTypes.node,
		name: PropTypes.node,
		country: PropTypes.node,
		rate: PropTypes.number,
	}),
}
export default CustomerCard
