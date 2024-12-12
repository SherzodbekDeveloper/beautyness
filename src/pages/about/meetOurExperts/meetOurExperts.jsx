import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { MeetOurExpertsData } from '../../../constants/index'
import MeetOurExpertsCard from './meetOurExpertsCard'
import './meetOurExperts.scss'
import SectionHeading from '../../../components/sectionHeading/sectionHeading'

const MeetOurExperts = ({ slicer }) => {
	const navigate = useNavigate()

	const handleCardClick = id => {
		navigate(`expert/${id}`)
	}

	return (
		<section className='meet-our-experts-section'>
			<div className='container-1200'>
				<SectionHeading
					title={'Meet our Experts'}
					descr={'The amazing women behind Beautyness'}
				/>
				<div className='meet-our-experts-container'>
					{MeetOurExpertsData.slice(0, slicer).map(card => (
						<MeetOurExpertsCard
							card={card}
							key={card.id}
							onClick={() => handleCardClick(card.id)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

MeetOurExperts.propTypes = {
	slicer: PropTypes.number.isRequired,
}

export default MeetOurExperts
