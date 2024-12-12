import SectionHeading from '../../components/sectionHeading/sectionHeading'
import Paragraph from '../../components/paragraph/paragraph'
import FlatDiscountCard from '../../components/flatDiscount/flatDiscountCard'
import './service.scss'

const FlatDiscountPage = () => {
	return (
		<section>
			<div className='container-1200'>
				<div className='flatDiscountPage'>
					<SectionHeading
						title={'Flat Discount '}
						descr={'Claim upto 50% offer on the most popular services...'}
					/>
					<Paragraph>
						Our Retreat is not meant to be an occasional treat, but rather a
						part of your routine that restores balance to your daily life.
					</Paragraph>
					<FlatDiscountCard />
				</div>
			</div>
		</section>
	)
}

export default FlatDiscountPage
