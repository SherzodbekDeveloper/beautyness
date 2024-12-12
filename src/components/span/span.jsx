import { PropTypes } from 'prop-types'
import './span.scss'
const Span = ({ children, styles }) => {
	return <span className={`${styles}`}>{children}</span>
}

Span.propTypes = {
	children: PropTypes.node,
	styles: PropTypes.node
};

export default Span
