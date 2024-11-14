import Button from './ui/Button.tsx';
import { useTimersContext } from '../stores/timers-context.tsx';

export default function Header() {
	const timersContext = useTimersContext();

	const handleTimerToggle = timersContext.isRunning
		? timersContext.stopTimers
		: timersContext.startTimers;

	return (
		<header>
			<h1>ReactTimer</h1>

			<Button onClick={handleTimerToggle}>
				{timersContext.isRunning ? 'Stop' : 'Start'} Timers
			</Button>
		</header>
	);
}
