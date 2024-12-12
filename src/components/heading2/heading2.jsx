import './heading2.scss'
import { PropTypes } from 'prop-types'

const Heading2 = ({ children, styles, textCenter}) => {
	return <h2 className={`heading2 ${styles} ${textCenter ? "text-center" : ""}`}>{children}</h2>
}

Heading2.propTypes = {
	children: PropTypes.node,
	styles: PropTypes.node,
	textCenter: PropTypes.bool,
}

export default Heading2
