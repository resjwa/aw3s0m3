import { useRef, useState } from 'react';

const User = () => {
	const nameInput = useRef();
	const emailInput = useRef();

	const handleSubmit = e => {
		e.preventDefault();
		const userData = {
			name: nameInput.current.value,
			email: emailInput.current.value
		}

		console.log(userData);
	};

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<p>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' ref={nameInput} />
				</p>
				<p>
					<label htmlFor='email'>Email</label>
					<input type='text' id='email' ref={emailInput} />
				</p>
				<button type='submit'>Send Form</button>
			</form>
		</section>
	);
};

export default User;
