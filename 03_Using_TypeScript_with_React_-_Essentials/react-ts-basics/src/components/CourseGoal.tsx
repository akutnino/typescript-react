type CourseGoalProps = {
	title: string;
	description: string;
};

function CourseGoal(props: CourseGoalProps) {
	const { description, title } = props;

	return (
		<article>
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<button type='button'>Delete</button>
		</article>
	);
}

export default CourseGoal;
