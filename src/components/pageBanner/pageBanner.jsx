import SectionHeading from '../sectionHeading/sectionHeading'
import './pageBanner.scss'
import Button from '../button/button'
import PropTypes from 'prop-types'
const PageBanner = ({ title, descr, button }) => {


	return (
		<section className='page-banner-section'>
			<div className='page-container'>
				<SectionHeading title={title} descr={descr} />
				{button ? <Button NavigateName={'/contact'} type={'filled'}>Make a reservation</Button> : ''}
			</div>
		</section>
	)
}

PageBanner.propTypes = {
	title: PropTypes.string.isRequired,
	descr: PropTypes.string.isRequired,
	button: PropTypes.bool,
	
}

export default PageBanner
