import { Fragment, useEffect } from 'react';

const ContactForm = props => {
	return (
		<Fragment>
			<h1>{props.title ? props.title : 'Default tieee'}</h1>
			<form>
				<p>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' required />
				</p>
				<p>
					<label htmlFor='rooms'>Number</label>
					<input type='number' id='rooms' required />
				</p>
				<p>
					<label htmlFor='message'>Message</label>
					<textarea id='message' required rows='5' />
				</p>
				<button type='submit'>Reserve your room</button>
			</form>
		</Fragment>
	);
};

export default ContactForm;
