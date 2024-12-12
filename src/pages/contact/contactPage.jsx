import PageBanner from '../../components/pageBanner/pageBanner'
import GetInTouch from './getInTouch'
import MakeAnAppointment from '../service-single/makeAnAppointment';
const ContactPage = () => {
	return (
		<div className='contact'>
			<PageBanner
				title={'GET IN TOUCH WITH US'}
				descr={'We Are Ready To Assist You In 24x7'}
			/>
			<GetInTouch />
			<MakeAnAppointment/>
		</div>
	)
}

export default ContactPage
