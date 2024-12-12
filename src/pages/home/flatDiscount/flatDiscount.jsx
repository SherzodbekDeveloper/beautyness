import Form from '../../../components/form/form'
import Heading2 from '../../../components/heading2/heading2'
import Paragraph from '../../../components/paragraph/paragraph'
import Span from '../../../components/span/span'
import './flatDiscount.scss'
import FlatDiscountCard from '../../../components/flatDiscount/flatDiscountCard'


const FlatDiscount = () => {
	return (
		<section className='flat-discount-section'>
			<div className='container-1200'>
				<div className='flat-discount-container flex' id='form'>
					<div className='flat-discount-left'>
						<div className='flat-discount-text'>
							<Span>FLAT DISCOUNT </Span>
							<Heading2>
								Claim upto 50% offer on ‍the most popular services...
							</Heading2>
							<Paragraph>
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, buying
								to injected humour, or randomised words.
							</Paragraph>
						</div>
						<FlatDiscountCard />
					</div>
					<div className='flat-discount-right'>
						<Form />
					</div>
				</div>
			</div>
		</section>
	)
}

export default FlatDiscount
