import Paragraph from '../../components/paragraph/paragraph'
import SectionHeading from '../../components/sectionHeading/sectionHeading'
import Form from '../../components/form/form'

const MakeAnAppointment = () => {
	return (
		<section className='make-an-appointment-section'>
			<div className='container-1200'>
				<div className='make-appointment-heading'>
					<SectionHeading
						title={'SCHEDULE YOUR PRESENCE'}
						descr={'Make an Appointment'}
					/>
					<Paragraph>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form.
					</Paragraph>
				</div>
				<div className='make-appointment-form-container'>
					<div className='form-container'>
						<Form />
						<p>
							Your personal information will not be passed on to any third
							parties. please read our <span>Privacy Policy</span> .
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MakeAnAppointment
