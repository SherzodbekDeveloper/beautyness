import { useParams } from 'react-router-dom'
import PageBanner from '../../components/pageBanner/pageBanner'
import BlogSingleCard from './blog-singleCard'
import { lastStories } from '../../constants'

const BlogSingle = () => {
	const { id } = useParams()
	const blogSingle = lastStories.find(single => single.id === parseInt(id))

	return (
		<div className='blog-single-container'>
			<PageBanner
				title='By Jessica Smith  /  Beauty & Wellness'
				descr='Certified Health Professionals & Community Medicine'
			/>
			<BlogSingleCard blogSingle={blogSingle} />
		</div>
	)
}

export default BlogSingle
