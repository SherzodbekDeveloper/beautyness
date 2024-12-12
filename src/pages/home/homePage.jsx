import '../../components/button/button.scss'

import AboutUs from './aboutUs'
import './home.scss'
import HomeSection from './homeSection'
import OurBlog from './ourBlog/ourBlog'
import OurService from './ourService/ourService.jsx'
import Testimonials from './testimonials/testimonials'
import OurAwesomeBenefits from '../../components/ourAwesomeBenefits/ourAwesomeBenefits'
import FlatDiscount from './flatDiscount/flatDiscount.jsx'
import OurStories from '../../components/ourStories/ourStories.jsx'

const HomePage = () => {
	return (
		<>
			<HomeSection />
			<OurBlog />
			<AboutUs />
			<OurService />
			<Testimonials />
			<OurAwesomeBenefits />
			<FlatDiscount />
			<OurStories section={true}/>
		</>
	)
}

export default HomePage
