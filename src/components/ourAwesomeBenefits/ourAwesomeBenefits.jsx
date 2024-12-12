import { awesomeBenefitsDatas } from '../../constants'
import SectionHeading from '../sectionHeading/sectionHeading'
import OurAwesomeBenefitsCard from './ourAwesomeBenefitsCard'
import './ourAwesomeBenefits.scss'

const OurAwesomeBenefits = () => {
	return (
		<section className='awesome-benefits-container-section'>
			<div className='container-1200'>
				<SectionHeading
					title='Our Awesome Benefits'
					descr='Actually what you’ll get from'
				/>
				<div className='awesome-container'>
					{awesomeBenefitsDatas.map(card => (
						<OurAwesomeBenefitsCard card={card} key={card.id} />
					))}
				</div>
			</div>
		</section>
	)
}

export default OurAwesomeBenefits
