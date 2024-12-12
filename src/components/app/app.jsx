import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../../index.css'
import HomePage from '../../pages/home/homePage.jsx'
import Navbar from '../navbar/navbar'
import ServicesPage from '../../pages/services/servicesPage.jsx'
import AboutPage from '../../pages/about/aboutPage.jsx'
import Footer from '../footer/footer.jsx'
import ServiceSingle from '../../pages/service-single/serviceSingle.jsx'
import ContactPage from '../../pages/contact/contactPage.jsx'
import Team from '../../pages/team/team.jsx'
import Blog from '../../pages/blog/blog.jsx'
import Locations from '../../pages/locations/locations.jsx'
import ExpertProfileCard from '../../pages/expert-profile/expertProfile'
import ScrollToTop from '../ScrollToTop'
import BlogSingle from '../../pages/blog-single/blog-single'
import NotFound from '../../pages/notFound/notFound.jsx'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton.jsx'
const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/services' element={<ServicesPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='services/service-single' element={<ServiceSingle />} />
				<Route path='/team' element={<Team />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/locations' element={<Locations />} />
				<Route path='team/expert/:id' element={<ExpertProfileCard />} />
				<Route path='blog/blog-single/:id' element={<BlogSingle />} />
				<Route path='*' element={<NotFound/>}></Route>
				<Route path='/notfound404' element={<NotFound/>}></Route>
			</Routes>
			<ScrollToTopButton/>
			<Footer />
		</BrowserRouter>
	)
}

export default App
