import Heading2 from '../../components/heading2/heading2'
import Span from '../../components/span/span'
import Paragraph from '../../components/paragraph/paragraph'
import { IoMdPlay } from 'react-icons/io'
const WhatIncludes = () => {
	return (
		<div className='what-includes-section'>
			<div className='what-includes-container'>
				<div className='includes-left-container'>
					<div className='includes-container'>
						<div className='includes-wrapper'>
							<div className='includes-text-container'>
								<Span>What Includes?</Span>
								<Heading2>About the service</Heading2>
								<Paragraph>
									It is a long established fact that a reader will be distracted
									by the readable content of a page when looking at its layout.
									The point of using Lorem Ipsum is that it has a more-or-less
									normal these content here, making it look like readable
									English.
								</Paragraph>
							</div>
							<div className='ourMethodology'>
								<h2>Our Methodology :</h2>
								<div className='methodCard'>
									<div className='card-image'>
										<img src='../../../public/Method.png' alt='' />
									</div>
									<div className='card-text'>
										<h3>The Assessment Stage</h3>
										<Paragraph>
											The point of using Lorem Ipsum is that it has a
											more-or-less normal letters.
										</Paragraph>
									</div>
								</div>
								<div className='methodCard'>
									<div className='card-image'>
										<img src='../../../public/Method.png' alt='' />
									</div>
									<div className='card-text'>
										<h3>The Initialisation Stage</h3>
										<Paragraph>
											The point of using Lorem Ipsum is that it has a
											more-or-less normal letters.
										</Paragraph>
									</div>
								</div>
								<div className='methodCard'>
									<div className='card-image'>
										<img src='../../../public/Method.png' alt='' />
									</div>
									<div className='card-text'>
										<h3>The Treatment Stage</h3>
										<Paragraph>
											The point of using Lorem Ipsum is that it has a
											more-or-less normal letters.
										</Paragraph>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='includes-right-container'>
					<img src="https://s3-alpha-sig.figma.com/img/3b49/abe4/e37d50eb59494d8b654ac1fe7ed5a03f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iUHJvwagndsRriLve2LmSq2cp9W4n2gxtozCJYqaNXZF0l~iVVEZ9t6lzAoLdXj3LdXnYEC-JJzNEn75P5k4oDFdIUF2doq0wQHti3qsnpIdoMlKPHYy3pfOi~aoO8BqOJldpPZwZb5uUOvds~96L5Kgm~gCsuez4oZWPp0aB9HNJN-ngdhbKB~FRDBR6kGPzOcLvSJYfldR2MFvf7umKupgVJgklHwy8N0z8kEl8rfCGZC-zlCwu4aZUJ9Rj~sM~ZB6tX0MdKo1i2fSMGMfBulU886r1u0yAwJWTi5kEUjKo3AOFTNlJqEicca9w2Azz4EQLJx2ykCjQqiKwhuunw__" alt="" />
					<div className='player-card'>
						<IoMdPlay />
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhatIncludes
