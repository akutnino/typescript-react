import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
import GoalsImg from './assets/goals.jpg';

function App() {
	return (
		<main>
			<Header image={{ src: GoalsImg, alt: 'A list of goals' }}>
				<h1>You Course Goals</h1>
			</Header>

			<CourseGoal title={'Learn react and TS'}>
				<p>Learn it from the ground up</p>
			</CourseGoal>
		</main>
	);
}

export default App;
