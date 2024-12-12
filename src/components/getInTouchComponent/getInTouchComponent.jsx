
import { AiOutlineMail } from 'react-icons/ai'
import { BiHomeAlt } from 'react-icons/bi'
import { FiPhoneCall } from 'react-icons/fi'
import './getInTouchComponent.scss'

const GetInTouchComponent = () => {
	return (
		<div className='get-in-touch-about'>
			<div className='list'>
				<div className='vector'>
					<BiHomeAlt />
				</div>
				<div className='list-items'>
					<h2>Visit Us :</h2>
					<p>NO.09a, Downtown, SAN DIEAGO, USA</p>
				</div>
			</div>
			<div className='list'>
				<div className='vector'>
					<AiOutlineMail/>
				</div>
				<div className='list-items'>
					<h2>Drop Us :</h2>
					<p>support@beautyness.com</p>
				</div>
			</div>
			<div className='list'>
				<div className='vector'>
					<FiPhoneCall />
				</div>
				<div className='list-items'>
					<h2>Call Us :</h2>
					<p>Call: 1-800-123-9999</p>
				</div>
			</div>
		</div>
	)
}

export default GetInTouchComponent
