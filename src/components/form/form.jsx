import { LuUser } from 'react-icons/lu'
import { FiPhone } from 'react-icons/fi'
import { CiMail } from 'react-icons/ci'
import { LuBookOpen } from 'react-icons/lu'
import { LiaEditSolid } from 'react-icons/lia'
import './form.scss'
import Button from '../button/button';

const Form = () => {
	return (
		<form className='flat-discount-form'>
			<div className='input items-center'>
				<span>
					<LuUser />
				</span>
				<input type='text' name='' id='' placeholder='Name' />
			</div>
			<div className='input items-center'>
				<span>
					<CiMail />
				</span>
				<input type='email' name='' id='' placeholder='Email' />
			</div>
			<div className='input items-center'>
				<span>
					<FiPhone />
				</span>
				<input type='number' name='' id='' placeholder='Number' />
			</div>
			<div className='input items-center'>
				<span>
					<LuBookOpen />
				</span>
				<input type='text' name='' id='' placeholder='Service You Need' />
			</div>
			<div className='input textarea-input' >
				<span>
					<LiaEditSolid />
				</span>
				<textarea type='text' name='' id='' placeholder='Any Note For Us' />
			</div>
			<Button type={'filled'}>GET AN APPOINTMENT</Button>
		</form>
	)
}

export default Form
