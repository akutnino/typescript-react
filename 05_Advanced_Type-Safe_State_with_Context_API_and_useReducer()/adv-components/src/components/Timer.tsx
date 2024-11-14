import Container from './ui/Container.tsx';
import { Timer as TimerProps } from '../stores/timers-context.tsx';

// type TimerProps = {
// 	name: string;
// 	duration: number;
// };

export default function Timer(props: TimerProps) {
	const { name, duration } = props;

	return (
		<Container as='article'>
			<h2>{name}</h2>
			<p>{duration}</p>
		</Container>
	);
}
