import Heading2 from '../../../components/heading2/heading2'
import Paragraph from '../../../components/paragraph/paragraph'
import Span from '../../../components/span/span'
import './aboutUs.scss'
const AboutUs = () => {
	return (
		<section className='about-us-section-about-page'>
			<div className="container-1200">
				<div className="about-us-container">
					<div className="about-us-left">
						<img src="./aboutUsGirl-about-section.jpg" alt="" />
					</div>
					<div className="about-us-right-about-page">
						<Span>About Us</Span>
						<Heading2>Style is a Reflection of your Attitude & your Personality</Heading2>
						<Paragraph>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words which dont look even many desktop publishing packages.</Paragraph>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs