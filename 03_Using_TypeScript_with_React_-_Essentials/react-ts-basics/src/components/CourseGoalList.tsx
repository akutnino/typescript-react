import { type CourseGoal as CourseGoalTypes } from '../App';
import CourseGoal from './CourseGoal';

type CourseGoalListProps = {
	goals: CourseGoalTypes[];
};

function CourseGoalList(props: CourseGoalListProps) {
	const { goals } = props;

	return (
		<ul>
			{goals.map((goalObject) => (
				<li key={goalObject.id}>
					<CourseGoal title={goalObject.title}>
						<p>{goalObject.description}</p>
					</CourseGoal>
				</li>
			))}
		</ul>
	);
}

export default CourseGoalList;
