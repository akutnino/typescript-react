import { useState } from 'react';
import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
import GoalsImg from './assets/goals.jpg';

type CourseGoal = {
	title: string;
	description: string;
	id: number;
};

function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([]);

	const handleAddGoal = (): void => {};

	return (
		<main>
			<Header image={{ src: GoalsImg, alt: 'A list of goals' }}>
				<h1>You Course Goals</h1>
			</Header>
			<button
				type='button'
				onClick={handleAddGoal}
			>
				Add Goal
			</button>
			<CourseGoal title={'Learn react and TS'}>
				<p>Learn it from the ground up</p>
			</CourseGoal>
		</main>
	);
}

export default App;
