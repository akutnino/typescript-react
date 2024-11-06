import { type ChangeEvent, type FormEvent, useState } from 'react';

type NewGoalProps = {
	handleAddGoal: (goalInput: string, summaryInput: string) => void;
};

function NewGoal(props: NewGoalProps) {
	const { handleAddGoal } = props;

	const [goalInput, setGoalInput] = useState<string>('');
	const [summaryInput, setSummaryInput] = useState<string>('');

	const handleGoalInput = (event: ChangeEvent<HTMLInputElement>) => {
		setGoalInput(event.target.value);
	};

	const handleSummaryInput = (event: ChangeEvent<HTMLInputElement>) => {
		setSummaryInput(event.target.value);
	};

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (goalInput === '' || summaryInput === '') return;

		handleAddGoal(goalInput, summaryInput);

		setGoalInput('');
		setSummaryInput('');
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<p>
				<label htmlFor='goal'>Your Goal</label>
				<input
					onChange={handleGoalInput}
					value={goalInput}
					type='text'
					id='goal'
				/>
			</p>
			<p>
				<label htmlFor='summary'>Short Summary</label>
				<input
					onChange={handleSummaryInput}
					value={summaryInput}
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
