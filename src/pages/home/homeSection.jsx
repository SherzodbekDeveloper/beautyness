import { PiSealWarningFill } from 'react-icons/pi'
import Button from '../../components/button/button'
import Span from '../../components/span/span'

const HomeSection = () => {

	return (
		<section className='home-page-section'>
			<div className='home-page-container'>
				<div className='home-page-container-left'>
					<div className='home-text'>
						<Span>
							<PiSealWarningFill /> Welcome to Beautyness!!!
						</Span>
						<h1>Beauty is power a smile is its sword.</h1>
						<p>
							There are many variation of passages are Ipsum available, majority
							have suffered alteration in some form.
						</p>
						<Button NavigateName={'/contact'} type={'filled'}>Make a reservation</Button>
					</div>
				</div>
				<div className='home-page-container-right'>
					<div className='card-image'>
						<img src='./homePageImages/Image (4).png' alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeSection
