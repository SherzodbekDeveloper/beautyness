import Heading2 from '../../components/heading2/heading2'
import Span from '../../components/span/span'
import Paragraph from '../../components/paragraph/paragraph'
import './contact.scss'
import GetInTouchComponent from '../../components/getInTouchComponent/getInTouchComponent'
const GetInTouch = () => {
	return (
		<section className='get-in-touch-container-section ' id='form'>
			<div className='container-1200'>
				<div className='get-in-touch-container'>
					<div className='get-in-touch-image'>
						<img src='./ContactPageImage.png' alt='' />
					</div>
					<div className='get-in-touch-text'>
						<Span>Get in Touch!</Span>
						<Heading2>We are here to help you always...</Heading2>
						<Paragraph>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, buying to
							many desktop publishing packages.
						</Paragraph>

						<GetInTouchComponent/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default GetInTouch
