import { useTimersContext } from '../stores/timers-context.tsx';
import Timer from './Timer.tsx';

export default function Timers() {
	const { timer } = useTimersContext();

	return (
		<ul>
			{timer.map((timerObject) => (
				<li key={timerObject.name}>
					<Timer {...timerObject} />
				</li>
			))}
		</ul>
	);
}
