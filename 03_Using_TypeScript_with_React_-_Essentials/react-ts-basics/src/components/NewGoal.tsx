import { useState, type FormEvent } from 'react';

function NewGoal() {
	const [goalInput, setGoalInput] = useState<string>('');
	const [summaryInput, setSummaryInput] = useState<string>('');

	const handleGoalInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGoalInput(event.target.value);
	};

	const handleSummaryInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSummaryInput(event.target.value);
	};

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();

		console.log(`goalInput: ${goalInput} - summaryInput: ${summaryInput}`);

		setGoalInput('');
		setSummaryInput('');
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<p>
				<label htmlFor='goal'>Your Goal</label>
				<input
					type='text'
					id='goal'
					onChange={handleGoalInput}
					value={goalInput}
				/>
			</p>
			<p>
				<label htmlFor='summary'>Short Summary</label>
				<input
					type='text'
					id='summary'
					onChange={handleSummaryInput}
					value={summaryInput}
				/>
			</p>
			<p>
				<button type='submit'>Add Goal</button>
			</p>
		</form>
	);
}

export default NewGoal;
