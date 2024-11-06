import { useRef, type FormEvent } from 'react';

function NewGoal() {
	const goalInputRef = useRef<HTMLInputElement>(null);
	const summaryInputRef = useRef<HTMLInputElement>(null);

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();

		const enteredGoal = goalInputRef.current!.value;
		const enteredSummary = summaryInputRef.current!.value;
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<p>
				<label htmlFor='goal'>Your Goal</label>
				<input
					ref={goalInputRef}
					type='text'
					id='goal'
				/>
			</p>
			<p>
				<label htmlFor='summary'>Short Summary</label>
				<input
					ref={summaryInputRef}
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
