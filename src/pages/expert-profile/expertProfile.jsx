// expertProfile.jsx
import { useParams } from 'react-router-dom'
import { MeetOurExpertsData } from '../../constants/index'
import ExpertProfileCard from './expertProfileCard'
import PageBanner from '../../components/pageBanner/pageBanner'

const ExpertProfile = () => {
	const { id } = useParams()
	const expert = MeetOurExpertsData.find(expert => expert.id === parseInt(id))

	return (
		<>
			<PageBanner title='THE EXPERT' descr='Creative Beauty Team' />
			<ExpertProfileCard expert={expert} />
		</>
	)
}

export default ExpertProfile
