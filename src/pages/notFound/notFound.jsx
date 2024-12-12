import PageBanner from '../../components/pageBanner/pageBanner'
import NotFound404 from './404NotFound'

const NotFound = () => {
	return (
		<>
			<PageBanner title='Page Not Found' descr='404 Error Page' />
			<NotFound404 />
		</>
	)
}

export default NotFound
