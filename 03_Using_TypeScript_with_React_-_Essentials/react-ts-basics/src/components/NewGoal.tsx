import { type FormEvent } from 'react';

function NewGoal() {
	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<p>
				<label htmlFor='goal'>Your Goal</label>
				<input
					type='text'
					id='goal'
				/>
			</p>
			<p>
				<label htmlFor='summary'>Short Summary</label>
				<input
					type='text'
					id='summary'
				/>
			</p>
			<p>
				<button type='submit'>Add Goal</button>
			</p>
		</form>
	);
}

export default NewGoal;
