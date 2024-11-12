import { createContext } from 'react';

type Timer = {
	name: string;
	duration: number;
};

type TimerState = {
	isRunning: boolean;
	timer: Timer[];
};

type TimersContextValue = TimerState & {
	addTimer: (timerData: Timer) => void;
	startTimers: () => void;
	stopTimers: () => void;
};

const TimerContext = createContext<TimersContextValue | null>(null);
