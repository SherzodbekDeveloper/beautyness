import './flatDiscountCard.scss'

const FlatDiscountCard = () => {
	return (
		<div className='getFlat-container'>
			<div className='getFlat-left'>
				<div className='card'>
					<div className='card-text'>
						<div className='card-image'>
							<img src='./flatDiscountIcon/Pattern.png' alt='' />
						</div>
						<div className='card-info'>
							<h2>MAIL US :</h2>
							<p>info@beautyness.com</p>
						</div>
					</div>
				</div>
				<div className='card'>
					<div className='card-text'>
						<div className='card-image'>
							<img src='./flatDiscountIcon/Pattern.png' alt='' />
						</div>
						<div className='card-info'>
							<h2>CALL US :</h2>
							<p>(+22) 123 4568 009</p>
						</div>
					</div>
				</div>
			</div>
			<div className='getFlat-right'>
				<div className='card-text'>
					<h2>- Get Flat -</h2>
					<img src='./flatDiscountIcon/50%.png' alt='' />
					<span>Discount</span>
				</div>
			</div>
		</div>
	)
}

export default FlatDiscountCard
