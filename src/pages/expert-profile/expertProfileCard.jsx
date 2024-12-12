import PropTypes from 'prop-types'
import Span from '../../components/span/span'
import Heading2 from '../../components/heading2/heading2'
import Paragraph from '../../components/paragraph/paragraph'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import Button from '../../components/button/button'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { RiLinkedinFill } from 'react-icons/ri'
import './expertProfile.scss'

const ExpertProfileCard = ({ expert }) => {
	return (
		<section className='expert-profile-section'>
			<div className='container-1200'>
				<div className='expert-profile-container'>
					<div className='expert-image-container'>
						<img src={expert.url} alt='' />
					</div>
					<div className='about-expert-container'>
						<div className='expert-text-container'>
							<Span>Beautyness Expert Manager</Span>
							<Heading2>{expert.name}</Heading2>
							<Paragraph>{expert.about}</Paragraph>
						</div>
						<div className='phone-and-email-list'>
							<div className='list-card'>
								<div className='vector'>
									<FiPhoneCall />
								</div>
								<div className='list-text'>
									<h3>{expert.phone}</h3>
								</div>
							</div>
							<div className='list-card'>
								<div className='vector'>
									<AiOutlineMail />
								</div>
								<div className='list-text'>
									<h3>{expert.email}</h3>
								</div>
							</div>
						</div>
						<Button NavigateName={'/contact'} type={'filled'}>Make a reservation</Button>

						<div className='social-medias'>
							<a href=''>
								<FaFacebookF />
							</a>
							<a href=''>
								<FaTwitter />
							</a>
							<a href=''>
								<RiLinkedinFill />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

ExpertProfileCard.propTypes = {
	expert: PropTypes.shape({
		url: PropTypes.string,
		name: PropTypes.string,
		situation: PropTypes.string,
		phone: PropTypes.string,
		email: PropTypes.string,
		about: PropTypes.string,
	}),
}

export default ExpertProfileCard
