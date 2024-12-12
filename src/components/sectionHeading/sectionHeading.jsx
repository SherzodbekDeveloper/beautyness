import PropTypes from 'prop-types'
import Span from '../span/span'
import Heading2 from '../heading2/heading2'

const SectionHeading = ({ title, descr }) => {
	return (
		<div className='flex flex-col gap-2.5 items-center max-w-[659px] mx-auto text-center'>
			<Span style={'text-center'}> {title} </Span>
			<Heading2 textCenter={true}> {descr} </Heading2>
		</div>
	)
}

SectionHeading.propTypes = {
	title: PropTypes.node,
	descr: PropTypes.node,
}

export default SectionHeading
