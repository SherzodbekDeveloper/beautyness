import Button from '../../components/button/button'
import Heading2 from '../../components/heading2/heading2'
import Paragraph from '../../components/paragraph/paragraph'
import './notFound.scss'

const NotFound404 = () => {
	return (
		<div className="not-found-container">
			<div className="not-found-text">
				<div className="not-found-img">
					<img src="/404.png" alt="" />
				</div>
				<div className="not-found-title">
					<Heading2>Page not Found!!!</Heading2>
					<Paragraph>The page you are looking for doesnt exist. Please try searching for some other page, or return to the websites homepage to find what youre looking for.</Paragraph>
				</div>
				<Button type={'filled'}>BACK TO HOME</Button>
			</div>
		</div>
	)
}

export default NotFound404