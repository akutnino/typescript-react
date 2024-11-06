import { useRef, type FormEvent } from 'react';

type NewGoalProps = {
	handleAddGoal: (goalInput: string, summaryInput: string) => void;
};

function NewGoal(props: NewGoalProps) {
	const { handleAddGoal } = props;
	const goalInputRef = useRef<HTMLInputElement>(null);
	const summaryInputRef = useRef<HTMLInputElement>(null);

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const enteredGoal = goalInputRef.current!.value;
		const enteredSummary = summaryInputRef.current!.value;

		handleAddGoal(enteredGoal, enteredSummary);
		event.currentTarget.reset();
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
