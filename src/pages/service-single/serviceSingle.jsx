import PageBanner from '../../components/pageBanner/pageBanner'
import WhatIncludes from './whatIncludes.jsx'
import MembershipCards from './membirshipSection/membershipCards.jsx'
import MakeAnAppointment from './makeAnAppointment.jsx'
import OurAwesomeBenefits from '../../components/ourAwesomeBenefits/ourAwesomeBenefits'
import './service-single.scss'

const ServiceSingle = () => {
	return (
		<>
			<PageBanner
				title={'The Perfect Service'}
				descr={'Service to Elevate the Better lifestyle'}
				button={true}
			/>
			<WhatIncludes />
			<MembershipCards />
			<MakeAnAppointment />
			<OurAwesomeBenefits />
		</>
	)
}

export default ServiceSingle
