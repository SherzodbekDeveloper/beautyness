import { homeCardText } from '../../../constants/index'
import OurBlogCard from './ourBlogCard'

const OurBlog = () => {
	return (
		<section className='home-card-section'>
			<div className='container-1200'>
				<div className='home-cards '>
					{homeCardText.map(card => (
						<OurBlogCard card={card} key={card.id} />
					))}
				</div>
			</div>
		</section>
	)
}

export default OurBlog
