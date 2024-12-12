import PageBanner from '../../components/pageBanner/pageBanner'
import MeetOurExperts from '../about/meetOurExperts/meetOurExperts'

const Team = () => {
	return (
		<>
			<PageBanner title={'THE BEAUTY TEAM'} descr={'Beautyness Experts'} />
			<MeetOurExperts slicer={6}/>
		</>
	)
}

export default Team
