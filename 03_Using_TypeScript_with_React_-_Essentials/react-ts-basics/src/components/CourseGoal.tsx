import { type ReactNode } from 'react';

// interface CourseGoalProps {
// 	title: string;
// 	children: ReactNode;
// }

type CourseGoalProps = {
	title: string;
	children: ReactNode;
};

function CourseGoal(props: CourseGoalProps) {
	const { title, children } = props;

	return (
		<article>
			<div>
				<h2>{title}</h2>
				{children}
			</div>
			<button type='button'>Delete</button>
		</article>
	);
}

export default CourseGoal;
