import { type FC, type PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{ title: string }>;

// interface CourseGoalProps {
// 	title: string;
// 	children: ReactNode;
// }

const CourseGoal: FC<CourseGoalProps> = (props) => {
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
};

export default CourseGoal;
