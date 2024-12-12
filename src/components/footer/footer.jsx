import './footer.scss'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { RiLinkedinFill } from 'react-icons/ri'
const Footer = () => {
	return (
		<>
			<section className='footer-section'>
				<div className='container-1200'>
					<div className='footer-container-top'>
						<div className='footer-top'>
							<div className='logo'>
								<img src='./Logo.png' alt='' />
								<h1>Beautyness</h1>
							</div>
							<div className='social-medias-list flex '>
								<a href='' className='social-card'>
									<FaFacebookF />
								</a>
								<a href='' className='social-card'>
									<FaTwitter />
								</a>
								<a href='' className='social-card'>
									<RiLinkedinFill />
								</a>
								<a href='' className='social-card'>
									<FaInstagram />
								</a>
							</div>
						</div>
						<div className='footer-line'></div>
						<div className='footer-bottom'>
							<div className='footer-list'>
								<h3>Explore</h3>
								<ul>
									<li>
										<a href=''>Home</a>
									</li>
									<li>
										<a href=''>About Us</a>
									</li>
									<li>
										<a href=''>Services</a>
									</li>
									<li>
										<a href=''>Appointments</a>
									</li>
									<li>
										<a href=''>Blog</a>
									</li>
									<li>
										<a href=''>Contact Us</a>
									</li>
								</ul>
							</div>
							<div className='footer-list'>
								<h3>Utility Pages</h3>
								<ul>
									<li>
										<a href=''>Start here</a>
									</li>
									<li>
										<a href=''>Style guide</a>
									</li>
									<li>
										<a href=''>404 not found</a>
									</li>
									<li>
										<a href=''>Password protected</a>
									</li>
									<li>
										<a href=''>Licenses</a>
									</li>
									<li>
										<a href=''>Changelog</a>
									</li>
								</ul>
							</div>
							<div className='footer-list'>
								<h3>Keep in Touch</h3>
								<div className='custom-list'>
									<p>
										<span>Address:</span>24A Kingston St, Los Vegas NC 28202,
										USA.
									</p>
									<p>
										<span>Mail:</span> support@doctors.com
									</p>
									<p>
										<span>Phone:</span> (+22) 123 - 4567 - 900
									</p>
								</div>
							</div>
							<div className='footer-list'>
								<h3>Working Hours</h3>
								<div className='custom-list'>
									<p>Mon to Fri: 7am - 6pm</p>
									<p>Sat: 9am - 7pm</p>
									<p>Sun: 9am - 6pm</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className='footer-container-bottom'>
				<div className='container-1200'>
					<span>© Copyright 2021. Drafted by Victor Themes.</span>
				</div>
			</div>
		</>
	)
}

export default Footer
