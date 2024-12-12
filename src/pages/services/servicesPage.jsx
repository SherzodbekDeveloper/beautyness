import PageBanner from '../../components/pageBanner/pageBanner'
import OurServicePage from './ourServicePage/ourServicePage'
import FlatDiscountPage from './flatDiscountPage'

const ServicesPage = () => {
	return (
		<div className='services-page'>
			<PageBanner
				title={'Our Services'}
				descr={'Well Experience Beauty at your Service'}
				button={true}
			/>
			<OurServicePage />
			<FlatDiscountPage/>
		</div>
	)
}

export default ServicesPage
