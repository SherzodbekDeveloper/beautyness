import './paragraph.scss'
import { PropTypes } from 'prop-types';
const Paragraph = ({ children }) => {
	return <p className='paragraph'> {children} </p>
}

Paragraph.propTypes = {
	children: PropTypes.node,
}

export default Paragraph
