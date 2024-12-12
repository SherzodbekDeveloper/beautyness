import SectionHeading from '../../../components/sectionHeading/sectionHeading'
import { MembershipData } from '../../../constants'
import MemberCard from './memberCard'
const MembershipCards = () => {
	return (
		<section className='membership-cards-section '>
			<div className='container-1200'>
				<SectionHeading
					title={'Easy & affordable Booking'}
					descr={'Membership Cards'}
				/>
				<div className='membership-cards'>
					{MembershipData.map((card) =>(
						<MemberCard key={card.id} card={card}/>
					))}
				</div>
			</div>
		</section>
	)
}

export default MembershipCards
