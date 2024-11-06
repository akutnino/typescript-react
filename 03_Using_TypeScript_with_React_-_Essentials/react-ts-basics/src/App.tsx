import { useState } from 'react';
import GoalsImg from './assets/goals.jpg';
import Header from './components/Header';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

export type CourseGoal = {
	title: string;
	description: string;
	id: number;
};

function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([]);

	const handleAddGoal = (goalInput: string, summaryInput: string): void => {
		const newGoal: CourseGoal = {
			title: goalInput,
			description: summaryInput,
			id: Math.random(),
		};

		setGoals((currentGoals) => [...currentGoals, newGoal]);
	};

	return (
		<main>
			<Header image={{ src: GoalsImg, alt: 'A list of goals' }}>
				<h1>You Course Goals</h1>
			</Header>

			<NewGoal handleAddGoal={handleAddGoal} />

			<CourseGoalList
				goals={goals}
				setGoals={setGoals}
			/>
		</main>
	);
}

export default App;
