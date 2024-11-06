import { type CourseGoal as CourseGoalTypes } from '../App';
import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';

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
		<>
			{goals.length === 0 && (
				<InfoBox mode='hint'>
					You have no course goals yet. Start adding some right now!
				</InfoBox>
			)}

			{goals.length >= 4 && (
				<InfoBox mode='warning'>
					You're collecting a lot of goals. Don't put too much on your plate!
				</InfoBox>
			)}

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
		</>
	);
}

export default CourseGoalList;
