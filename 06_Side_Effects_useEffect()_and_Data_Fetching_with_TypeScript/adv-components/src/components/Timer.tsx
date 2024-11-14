import { useEffect, useState } from 'react';
import Container from './ui/Container.tsx';
import { Timer as TimerProps, useTimersContext } from '../stores/timers-context.tsx';

// type TimerProps = {
// 	name: string;
// 	duration: number;
// };

export default function Timer(props: TimerProps) {
	const { name, duration } = props;
	const [remainingTime, setRemainingTime] = useState(duration * 1000);
	const { isRunning } = useTimersContext();

	useEffect(() => {
		if (!isRunning || remainingTime <= 0) return;

		const intervalTimer = setInterval(() => {
			setRemainingTime((currentTime) => currentTime - 1000);
		}, 1000);

		return () => {
			clearInterval(intervalTimer);
		};
	}, [remainingTime, isRunning]);

	const formattedTime = (remainingTime / 1000).toFixed(2);

	return (
		<Container as='article'>
			<h2>{name}</h2>
			<p>
				<progress
					max={duration * 1000}
					value={remainingTime}
				/>
			</p>
			<p>{formattedTime}</p>
		</Container>
	);
}
