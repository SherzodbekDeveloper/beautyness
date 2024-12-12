import Button from '../../../components/button/button'
import SectionHeading from '../../../components/sectionHeading/sectionHeading'
import { ourServiceDatas } from '../../../constants/index'
import OurServiceCard from '../../home/ourService/ourServiceCard'
import '../service.scss'

const OurServicePage = () => {

	return (
		<section className='our-service-container-page'>
			<div className='container-1200'>
				<SectionHeading
					title={'Our Services'}
					descr={'We are Experienced in making you very Beautiful'}
				/>
				<div className='our-services-container-page mt-12'>
					<div className='our-services-container-top '>
						<div className='image-container'>
							<img
								src='https://s3-alpha-sig.figma.com/img/fab2/e569/849a03baf0c6c3e3e51ca7ec05bf9951?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HcA-rJv3VzHSYpt1dlwDXCRQb77alBFW2f3tV9s5VVl2~ttKCVBXJXqcu8iycRIAHw9anKcWym5-~dCmT107U2gMn8Rsv4YzG55UQlO96iJkE6or7L~r7IdFBDg6SeC3PBpbjaRVr4o-Zh4vKa6XDBbTGhtONoZg-78m6uXg4zxWh7CVfI0PcFoJHyhpwIfhpdOn-t~bn3eXhg7a0QpXBwvu6la59uvci4qhhPupkxjplhY~ECBPx7QgR-wpOUmGglMi1a3zQg2s3Jn19Lkw5y32dhPP3dd4f-SOkrysPRdUFHbsib2o5hCTl4GDKbtthDOp-~dvkJD7ei-xdg54OA__'
								alt=''
							/>
						</div>
						<div className='product-container max-w-[530px] w-full flex flex-col gap-[18px] py-8'>
							{ourServiceDatas.map(product => (
								<OurServiceCard product={product} key={product.id} />
							))}
							<Button NavigateName={'/services/service-single'} type={'unfilled'}>
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
							<Button NavigateName={'/services/service-single'} type={'unfilled'}>
								GET AN APPOINTMENT
							</Button>
						</div>
						<div className='image-container'>
							{' '}
							<img
								src='https://s3-alpha-sig.figma.com/img/d98e/dc88/b369f4417419e85baf5bb221b6fa3d1a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lIEoPFQjjh59t6h-yFVJybxrpD0asDqAECfs2~WjdylxjcFlT3gwUoMrGAdsCIG1bnRU8RyIXiPK1tXciJoLI8TmbqHr-ekKenK11FJEeAv65BNgcxIgpqlgOlsBKJnRlNCH~ipxytsRbXYKpPi9bylNpHTBFQex888NvHSQ55BE5JUPdD7sK3o80CTLMft1Ug9jHJBIsMB8HvEP-bKAmx8AIkY92wZej7tcI2nGR1oV446HAbWNOyPKU6~VUiK2Gq-bQ1tFpPp~zAdQKScT3P9WXxJbW0wNVA2p45gsDchGMVdXEKW7-rXzsVrN-IYQETHCRYRdkkqM2y-atmiBbw__'
								alt=''
							/>
						</div>
					</div>
					<div className='our-services-container-top '>
						<div className='image-container'>
							<img
								src='https://s3-alpha-sig.figma.com/img/d0a3/3ebb/162eba129210c21d705e8467637ccd8d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PUcLLOQPRzSw6r6o4umtF7aajIegqHz8nTBjaNqI9ZD6aLggL1HEwP5y3wuAo4rLaYO6VXqmecRPyv3yYqpgiH4RaAEJxZdh0pmKPkrfpcrEq10wno5T9gQqGYvd6hw0cVZLkGaVa6Z0T7Za5vIwwEzTi8xiqhPK6t3N1rQgkYWo7AJ6Kn4v0rtHklI4TqwhJPqV3YMlxARBURNhF6IXoJrKRLvqnb~AboY7jum3BS9yCGETIfUWHUwyod~UIHcTL8W2uQF1j1ReWdC91KWoW-LmPd6IHMCh2Aq0R7XnzbN9eF-kWwNHVJTu5JAVqTwfRyjJ8wggJmqDGtG2MMltgQ__'
								alt=''
							/>
						</div>
						<div className='product-container max-w-[530px] w-full flex flex-col gap-[18px] py-8'>
							{ourServiceDatas.map(product => (
								<OurServiceCard product={product} key={product.id} />
							))}
							<Button NavigateName={'/services/service-single'} type={'unfilled'}>
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
							<Button NavigateName={'/services/service-single'} type={'unfilled'}>GET AN APPOINTMENT</Button>
						</div>
						<div className='image-container'>
							<img
								src='https://s3-alpha-sig.figma.com/img/9470/79e4/71c86d33b3d18e645a66be14d1bb3e86?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mdEdyFpN~m0l0trLtwJVLqHoUueqfV5h4b0yXXlt9-3DMqu3y9cnqAbkWUamunXnnVmcn6RjZr~ayW38bSedzmGJb9alh8DPfMof36YT~n2Zsl08uxiOARxLSvGyGfWsj6LUjp8E2JavsX-cQcP3fARONbj40kLSAqyqr2kvdHtiac720UuzIa3O7PcPOWD7JT1kCbsXjwUxd-pw7m7PQ~sw70R~ku01Zj9MdlML6~Fcfqs0PRhBlFsoVkJ0p-nMdgx8uvzylE3yjSASPwRdcDbZqeJci8OO~oVC7ASzxRe13G~LkaChJr~cT4jZ-awpHpe7La~7NYx2dU022OT05Q__'
								alt=''
							/>
						</div>
					</div>
					<div className='our-services-container-top '>
						<div className='image-container'>
							<img
								src='https://s3-alpha-sig.figma.com/img/f860/cc8e/1046a4a122c99de25503ea67cfa44e69?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qx1di6lj9-Z7B23yvgOsFopl3Gns1Wro6QWvM1eqwWxb0E~-caQ0k11xK6JdkA0grZ~Kw1LCPl-met1oEV3D9BYUcbg-YYxezKSPzBi8D4bXgZH775BWIhZCT8BzC5-9VGym4g2jIAQc4miIfk0hgudyCPmd8xlV6iaAO0A8eH29G~CX-Yi5gccJ7blhCIGVTJHtG80iCr-slWk261oN0DVOd~bYQZ8pfto-aeQncnjpG11lHH7~XEIsJFXjZtm3U8BRjpNay5rwM-ESfosrmF-akMXLYVD~hlWoD9CvKEOzgmSJK6bwQTO-gxMmEG3Py6zMVwAyXzon3NahAb-QAg__'
								alt=''
							/>
						</div>
						<div className='product-container max-w-[530px] w-full flex flex-col gap-[18px] py-8'>
							{ourServiceDatas.map(product => (
								<OurServiceCard product={product} key={product.id} />
							))}
							<Button NavigateName={'/services/service-single'}type={'unfilled'}>
								GET AN APPOINTMENT
							</Button>
							<div className='dark-blue-card'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OurServicePage
