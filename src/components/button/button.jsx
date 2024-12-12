import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const Button = ({ type, children, style, NavigateName }) => {
	const navigate = useNavigate()

	const changeDirection = name => {
		navigate(name)
	}
	return (
		<button
			className={`btn-${type} ${style} `}
			onClick={() => changeDirection(NavigateName)}
		>
			{children}
		</button>
	)
}

export default Button

Button.propTypes = {
	type: PropTypes.string,
	children: PropTypes.string,
	style: PropTypes.string,
	NavigateName: PropTypes.string,
}
