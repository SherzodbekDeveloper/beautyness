import SectionHeading from '../../../components/sectionHeading/sectionHeading'
import { aboutUsCard } from '../../../constants'
import './ourValues.scss'
import Paragraph from '../../../components/paragraph/paragraph'
const OurValues = () => {
	return (
		<section className='our-values-section'>
			<div className='container-1200'>
				<SectionHeading
					title={'Our Values'}
					descr={'The work values we thrive for'}
				/>
				<div className='value-cards'>
					{aboutUsCard.map(card => (
						<div className='card' key={card.title}>
							<div className='card-image'>
								<img src={card.url} alt='' />
							</div>
							<div className='card-text'>
								<h2>{card.title}</h2>
								<Paragraph>{card.description}</Paragraph>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default OurValues
