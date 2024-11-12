import Button from './ui/Button.tsx';
import { useTimersContext } from '../stores/timers-context.tsx';

export default function Header() {
	const timersContext = useTimersContext();

	return (
		<header>
			<h1>ReactTimer</h1>

			<Button>{timersContext.isRunning ? 'Stop' : 'Start'} Timers</Button>
		</header>
	);
}
