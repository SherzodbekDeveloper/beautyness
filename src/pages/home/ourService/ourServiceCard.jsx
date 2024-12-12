import PropTypes from 'prop-types'
import './ourService.scss'
const OurServiceCard = ({ product }) => {
	return (
		<div className='product flex flex-col gap-1.5 '>
			<div className='product-header flex items-center justify-between'>
				<h2 className='product-name'>{product.title}</h2>
				<span className='dots'></span>
				<p className='product-price'>from {product.price}</p>
			</div>
			<div className='product-description'>
				{product.description}
			</div>
		</div>
	)
}

OurServiceCard.propTypes = {
	product: PropTypes.shape({
		title: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	})
}

export default OurServiceCard
