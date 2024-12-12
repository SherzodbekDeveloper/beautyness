import PageBanner from '../../components/pageBanner/pageBanner'
import AboutUs from './aboutUs/aboutUs'
import MeetOurExperts from './meetOurExperts/meetOurExperts'
import OurValues from './ourValues/ourValues'
import AboutTestimonials from './aboutTestimonials/aboutTestimonials'
import ShareUs from './shareUs/shareUs'

const AboutPage = () => {
	return (
		<>
			<PageBanner
				title={'SHORT STORY ABOUT US'}
				descr={'The big story behind, our beautyness center'}
				button={true}
			/>
			<OurValues />
			<AboutUs />
			<MeetOurExperts slicer={3} />
			<AboutTestimonials />
			<ShareUs />
		</>
	)
}

export default AboutPage
