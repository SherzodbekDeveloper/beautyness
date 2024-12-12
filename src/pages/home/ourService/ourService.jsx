import Button from '../../../components/button/button'
import SectionHeading from '../../../components/sectionHeading/sectionHeading'
import { ourServiceDatas } from '../../../constants/index'
import OurServiceCard from './ourServiceCard'

const OurService = () => {
	return (
		<section className='our-services-section'>
			<div className='container-1200'>
				<SectionHeading
					title={'Our Services'}
					descr={'We are Experienced in making you very Beautiful'}
				/>
				<div className='our-services-container mt-12'>
					<div className='our-services-container-top '>
						<div className='image-container'>
							{' '}
							<img
								src='https://s3-alpha-sig.figma.com/img/fab2/e569/849a03baf0c6c3e3e51ca7ec05bf9951?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HcA-rJv3VzHSYpt1dlwDXCRQb77alBFW2f3tV9s5VVl2~ttKCVBXJXqcu8iycRIAHw9anKcWym5-~dCmT107U2gMn8Rsv4YzG55UQlO96iJkE6or7L~r7IdFBDg6SeC3PBpbjaRVr4o-Zh4vKa6XDBbTGhtONoZg-78m6uXg4zxWh7CVfI0PcFoJHyhpwIfhpdOn-t~bn3eXhg7a0QpXBwvu6la59uvci4qhhPupkxjplhY~ECBPx7QgR-wpOUmGglMi1a3zQg2s3Jn19Lkw5y32dhPP3dd4f-SOkrysPRdUFHbsib2o5hCTl4GDKbtthDOp-~dvkJD7ei-xdg54OA__'
								alt=''
							/>
						</div>
						<div className='product-container max-w-[530px] w-full flex flex-col gap-[18px] py-8'>
							{ourServiceDatas.map(product => (
								<OurServiceCard product={product} key={product.id} />
							))}
							<Button
								NavigateName={'/services/service-single'}
								type={'unfilled'}
							>
								GET AN APPOINTMENT
							</Button>
							<div className='dark-blue-card'></div>
						</div>
					</div>
					<div className='our-services-container-bottom'>
						<div className='product-container max-w-[530px] w-full flex flex-col justify-end gap-[18px] py-8'>
							<div className='dark-blue-card-bottom'></div>
							{ourServiceDatas.map(product => (
								<OurServiceCard product={product} key={product.id} />
							))}
							<Button
								NavigateName={'/services/service-single'}
								type={'unfilled'}
							>
								GET AN APPOINTMENT
							</Button>
						</div>
						<div className='image-container'>
							<img
								src='https://s3-alpha-sig.figma.com/img/d98e/dc88/b369f4417419e85baf5bb221b6fa3d1a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lIEoPFQjjh59t6h-yFVJybxrpD0asDqAECfs2~WjdylxjcFlT3gwUoMrGAdsCIG1bnRU8RyIXiPK1tXciJoLI8TmbqHr-ekKenK11FJEeAv65BNgcxIgpqlgOlsBKJnRlNCH~ipxytsRbXYKpPi9bylNpHTBFQex888NvHSQ55BE5JUPdD7sK3o80CTLMft1Ug9jHJBIsMB8HvEP-bKAmx8AIkY92wZej7tcI2nGR1oV446HAbWNOyPKU6~VUiK2Gq-bQ1tFpPp~zAdQKScT3P9WXxJbW0wNVA2p45gsDchGMVdXEKW7-rXzsVrN-IYQETHCRYRdkkqM2y-atmiBbw__'
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OurService
