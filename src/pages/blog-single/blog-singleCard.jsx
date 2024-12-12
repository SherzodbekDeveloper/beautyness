import PropTypes from 'prop-types'
import Button from '../../components/button/button'
import Paragraph from '../../components/paragraph/paragraph'
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi'
import { TfiTwitterAlt } from 'react-icons/tfi'
import { IoLogoInstagram } from 'react-icons/io5'
import './blog-single.scss'
const BlogSingleCard = ({ blogSingle }) => {
	return (
		<section className='blog-single-about-card-section'>
			<div className='container-1200'>
				<div className='about-the-card-container'>
					<div className='about-image-container-top'>
						<img
							src='https://s3-alpha-sig.figma.com/img/59a7/d1f6/c3bf64e7311c947f7f1f5fbcc527f97b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NtOGh0BJ1uet2LM8KQ3cXIDbo2mVY1JfDaL0nemTWAIo2lYKAybJWlO~q7-tx6I0NO0Sb3IpWXd1HGl6sYcaajYfRO6nSh~et-Ij2m8mmHbwbDUO8Q07yZAzg4HQivCBN~2LdpWMogfB5IRYorNmClimOI2HgUZCX1MIuMBMZiVdty9yONGCuuq1JMCTgvVwiJcvqRSbBPnIUtfNXMlDCrQCBvL~smtPGXtUVzP1LHDiT9mbUQ2rf9UIAAspqpoVGNVNpCPkcAn-PpAz3Fcr1DL7a8A2eFQX8lRJvqyS6ePdftuqzqAG25tSqZb0~PqHkXFsSaAm7pTOqkNv23fEfQ__'
							alt=''
						/>
					</div>

					<div className='about-information-container-bottom'>
						<div className='about-chairman'>
							<div className='about-profile'>
								<div className='profile-image'>
									<img src='../../../public/chairmanImage.png' alt='' />
								</div>
								<div className='profile-text'>
									<h2>Author - Chris Jericho</h2>
									<p>Chairman & Director</p>
									<Button type={'filled'}>BEAUTY HEALTH</Button>
								</div>
							</div>
							<div className='about-card'>
								<div className='chairman-description'>
									<Paragraph>
										If you are going to use a passage of Lorem Ipsum, you need
										to be sure there isnt anything embarrassing hidden in the
										middle of text. All the Lorem Ipsum generators on the
										Internet tend tools that generator on the Internet.
									</Paragraph>
								</div>
							</div>
							<div className='social-medias-list-chairman'>
								<h2>Share us on :</h2>
								<div className='social-media'>
									<div className='media-card'>
										<BiLogoFacebook />
									</div>
									<div className='media-card'>
										<TfiTwitterAlt />
									</div>
									<div className='media-card'>
										<BiLogoLinkedin />
									</div>
									<div className='media-card'>
										<IoLogoInstagram />
									</div>
								</div>
							</div>
						</div>
						<div className='about-card-information'>
							<div className='about-card-text-top'>
								<Paragraph>
									Uniquely matrix economically sound value through cooperative
									technology. Competently parallel task fully researched data
									and enterprise process improvements. Collaboratively expedite
									quality manufactured products via client-focused results
									quickly communicate enabled technology and turnkey leadership
									skills. Uniquely enable accurate supply chains rather than
									friction technology.
								</Paragraph>
								<h2>Take a look to our collections</h2>
								<div className='text-container-list'>
									<Paragraph>
										There are many variations of passages of Lorem Ipsum
										available, but the majority have suffered alteration in some
										form, by injected humour, or randomised words which dont
										look even slightly believable. If you are going to use a
										passage of Lorem Ipsum, you need to be sure there isnt
										anything embarrassing.
									</Paragraph>

									<div className='text-list'>
										<li className='list'>
											Health Care is committed to the pillars of academic health
											care
										</li>
										<li className='list'>
											Health Care is committed to the pillars of academic health
											care
										</li>
										<li className='list'>
											Health Care is committed to the pillars of academic health
											care
										</li>
									</div>
								</div>
							</div>

							<div className='about-image-card'>
								<div className='image-card'>
									<img src={blogSingle.url} alt='' />
								</div>

								<Paragraph>Face Massage - Skin Care</Paragraph>
							</div>

							<div className='about-card-text-bottom'>
								<div className='about-card-text'>
									<h2>Feel Like Home With Best Beauty Tips</h2>
									<Paragraph>
										It was popularised in the 1960s with the release of Letraset
										containing Lorem Ipsum passages, and more recently with
										desktop publishing software like Aldus PageMaker including
										versions of Lorem Ipsum.
									</Paragraph>
								</div>
								<div className='about-card-description'>
									<div className='left-corner'></div>
									<Paragraph>
										“Crowdsource term sheet freemium beta stealth responsive web
										design niche market rock star channels. Supply chain market
										graphical user interface assets.”
									</Paragraph>
								</div>

								<div className='about-card-list'>
									<ol>
										<li>
											Your wellness goals and the areas of preference, then
											unwind with a customized.
										</li>
										<li>
											Discover better health & wellness by using our beautician
											ratings & reviews to make your choice.
										</li>
										<li>
											Professionals team is trained to provide you with the care
											and support you need during this difficult time.
										</li>
										<li>
											We will fax the requested records directly to the
											Qualified Beautician.
										</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

BlogSingleCard.propTypes = {
	blogSingle: PropTypes.shape({
		data: PropTypes.string,
		author: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		url: PropTypes.string,
	}),
	changeCardClick: PropTypes.any,
}

export default BlogSingleCard
