import Span from '../../../components/span/span'
import Heading2 from '../../../components/heading2/heading2'
import Paragraph from '../../../components/paragraph/paragraph'
import './shareUs.scss'
import Button from '../../../components/button/button';
const ShareUs = () => {
	return (
		<section className='share-us-section'>
			<div className='container-1200'>
				<div className='share-us-container'>
					<div className='share-us-left'>
						<div className='share-text'>
							<Span>Share us</Span>
							<Heading2>Follow us on Instagram</Heading2>
							<Paragraph>
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, buying
								to injected humour, or randomised words many desktop publishing
								packages.
							</Paragraph>
						</div>
						<div className='share-image'>
							<img
								src='https://s3-alpha-sig.figma.com/img/8ea2/e82e/34392186f4003896dcf0877922c58cbd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ec4LMqPW-BeKcRs6fI0GVDdyH7bySytc3m6pL57MgechSBkeEUn~cOWdxXS30petVtG0wpynbMMFji0uaJ5BFmQRpK2QjDXznAc1Rh~GC3hE6r1NGckDLjLBIQO31wqFZeprRLBotf0HAkA3INKHE7s-HgynE3V~8PYPHptK~qr1VU-5D6SQYp3GrWHA4gF1mk7EvJcDZlWH-bjJDLrnE~MfGOjdvlCTaZg-Np9Ovv9wzVUNpqFXuz3pKaRlMapatCgiO60dg6x~MlWDvg4SBbofJgcZnqZvPUCY18uT0VgGfs0u-6NQWmHTOdublRhEVG7jtjXEvA9t9r~JjnoauA__'
								alt=''
							/>
						</div>
					</div>
					<div className='share-us-right'>
						<div className='share-img'>
							<img
								src='https://s3-alpha-sig.figma.com/img/535d/2850/9eb907ad1ac0dea9a12048d84319d51d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ByAQmWxaRqh1y6ZuC-V3RmcqhzfWkvCb0gazyShIk9U9I5L0wAq~TInTOOgn0m0DLkGWtgw4kPQp4acE83VEAejtmqTBwD0Avx814t~HbS6G2LZ0q0yWnNubfauJF5eaM3bN2iWZlTDQ~QROHwprMZmya-e~Edgl7y8SoCjhBPSlHl195-ftJ5N4f8448gpugKSdZe8cHjB-sxriUDdqz~kofE1E9Etjzq6VoWVBDX9MfGPQryPtLVqoEGxtOMH1VQ5YsbYGEpSiffEXUk~S4x8nnvx0UItDwxQhjQLSOxBsP-kH441RE9PlMMrSn048xbpcGFZ-iMdaJ-oe1kxj8w__'
								alt=''
							/>
							<img
								src='https://s3-alpha-sig.figma.com/img/eddf/699d/fc6ab3d0a8183c81d3cb82a65ff999e1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cov6xneHZycHelXvRZqYd7J1XzJcKegtgr1hah05xcYBqkwezFTKAgeNiPcuwG8g3gslefaZdbuVu4nhH3oacEBN4VczgMpyRmWyzphk7NMDx8DBH~XfsIX4Td6f1pvSBUHNDH3ZDF3QiaIMWtEbV6CV3atqHopgn6FpjDQ4gldAV4kbcCDt79HYlPPKuCOmkU7JoRgUMOxKkkqiWCUDCuazCgjuqWkdIbyEYbjs0SpAi7E4J0P4JW0ZGyM~8fnd-R2siWYb-2OqvN0dVCE5xAQtzzTZNvIPG4HXbwF2mwxN1Q9ixhNDOQxwGthogeAa1lZiiPAK-FaDsopHFTyYGg__'
								alt=''
							/>
						</div>
					</div>
				</div>
			<Button NavigateName={'/contact'} type={'filled'}>Contact US</Button>
			</div>
		</section>
	)
}

export default ShareUs
