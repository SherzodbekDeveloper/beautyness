import Heading2 from '../../components/heading2/heading2'
import Span from '../../components/span/span'
import GetInTouchComponent from '../../components/getInTouchComponent/getInTouchComponent';
import Button from '../../components/button/button'
import './locations.scss'

const OurLocation = () => {
	return (
		<section className='ourLocation-container-section'>
			<div className='container-1200'>
				<div className='ourLocation-container'>
					<div className='location-card'>
						<div className='card-image'>
							<img src='/locations/stulsAndFlowers.png' alt='' />
						</div>
						<div className='location-text'>
							<div className='card-text'>
								<Span>Columbia</Span>
								<Heading2>Washington D.C</Heading2>
							</div>
							<GetInTouchComponent/>
							<Button NavigateName={'/contact'} type={'filled'}>Make a reservation</Button>
						</div>
					</div>

					<div className='location-card'>
					
						<div className='location-text'>
							<div className='card-text'>
								<Span>san francisco</Span>
								<Heading2>New York</Heading2>
							</div>
							<GetInTouchComponent/>
							<Button NavigateName={'/contact'} type={'filled'}>Make a reservation</Button>
						</div>
						<div className='card-image'>
							<img src='/locations/stulsAndFlowers.png' alt='' />
						</div>
					</div>
					<div className='location-card'>
						<div className='card-image'>
							<img src='/locations/stulsAndFlowers.png' alt='' />
						</div>
						<div className='location-text'>
							<div className='card-text'>
								<Span>FRANCE</Span>
								<Heading2>Paris</Heading2>
							</div>
							<GetInTouchComponent/>
							<Button NavigateName={'/contact'} type={'filled'}>Make a reservation</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OurLocation
