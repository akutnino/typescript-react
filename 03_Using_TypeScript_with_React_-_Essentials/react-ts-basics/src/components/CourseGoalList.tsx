import { type CourseGoal as CourseGoalTypes } from '../App';
import CourseGoal from './CourseGoal';

type CourseGoalListProps = {
	goals: CourseGoalTypes[];
	setGoals: React.Dispatch<React.SetStateAction<CourseGoalTypes[]>>;
};

function CourseGoalList(props: CourseGoalListProps) {
	const { goals, setGoals } = props;

	const handleDeleteGoal = (goalID: number) => {
		return () =>
			setGoals((currentGoals) =>
				currentGoals.filter((goalObject) => goalObject.id !== goalID)
			);
	};

	return (
		<ul>
			{goals.map((goalObject) => (
				<li key={goalObject.id}>
					<CourseGoal
						title={goalObject.title}
						onClick={handleDeleteGoal(goalObject.id)}
					>
						<p>{goalObject.description}</p>
					</CourseGoal>
				</li>
			))}
		</ul>
	);
}

export default CourseGoalList;
