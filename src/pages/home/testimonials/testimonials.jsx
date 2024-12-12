import CustomerCard from '../../../components/customerCard/customerCard'
import SectionHeading from '../../../components/sectionHeading/sectionHeading'
import { customersFeedback } from '../../../constants'
const Testimonials = () => {
	return (
		<section className='testimonials-container-section'>
			<div className="container-1200">
				<SectionHeading title={'Testimonials'} descr={'What our Customers says...'}/>
				<div className="testimonials-container">
					{customersFeedback.map((card) =>(
						<CustomerCard  card={card} key={card.id}/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonials