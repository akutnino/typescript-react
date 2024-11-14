import { useState } from 'react';
import Container from './ui/Container.tsx';
import { Timer as TimerProps } from '../stores/timers-context.tsx';

// type TimerProps = {
// 	name: string;
// 	duration: number;
// };

export default function Timer(props: TimerProps) {
	const { name, duration } = props;
	const [remainingTime, setRemainingTime] = useState(duration * 1000);

	setInterval(() => {
		setRemainingTime((currentTime) => currentTime - 1000);
	}, 1000);

	return (
		<Container as='article'>
			<h2>{name}</h2>
			<p>
				<progress
					max={duration * 1000}
					value={remainingTime}
				/>
			</p>
			<p>{}</p>
		</Container>
	);
}
