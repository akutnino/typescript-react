import { useState } from 'react';
import Header from './components/Header';
import GoalsImg from './assets/goals.jpg';
import CourseGoalList from './components/CourseGoalList';

export type CourseGoal = {
	title: string;
	description: string;
	id: number;
};

function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([]);

	const handleAddGoal = (): void => {
		const newGoal: CourseGoal = {
			title: 'Learn React and TypeScript',
			description: 'Learning it in depth',
			id: Math.random(),
		};

		setGoals((currentGoals) => [...currentGoals, newGoal]);
	};

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

			<CourseGoalList goals={goals} />
		</main>
	);
}

export default App;
