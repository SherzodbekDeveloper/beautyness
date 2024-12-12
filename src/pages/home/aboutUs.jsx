import Heading2 from '../../components/heading2/heading2'
import Paragraph from '../../components/paragraph/paragraph'
import Span from '../../components/span/span'
import { aboutUsCard } from '../../constants'
import './home.scss'

const AboutUs = () => {
	return (
		<section className='about-us-section'>
			<div className='container-1200'>
				<div className='about-us-container flex '>
					<div className='about-us-left max-w-[529px] w-full '>
						<div className='about-us-text  '>
							<Span styles={'mb-2 span-media'}>About Us</Span>
							<Heading2 styles={'head-media'}>
								The Beauty is about being Comfortable in your own skin!
							</Heading2>
							<div className="card-image">
							<img className='card-image-img' src='./homePage-AboutUs-Girl.png' alt='' />
							</div>
							<Paragraph>
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, buying
								to injected humour, or randomised words which dont look even
								many desktop publishing packages.
							</Paragraph>
						</div>
						<div className='about-us-cards'>
							{aboutUsCard.map(card => (
								<div className='card' key={card.id}>
									<div className='card-info'>
										<div className='card-image'>
											<img src={card.url} alt='' />
										</div>
										<div className='card-text'>
											<h2>{card.title}</h2>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className='about-us-right'>
						<img src='./homePage-AboutUs-Girl.png' alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
