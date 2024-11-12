import { createContext, type ReactNode } from 'react';

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

type TimerContextProviderProps = {
	children: ReactNode;
};

function TimerContextProvider(props: TimerContextProviderProps) {
	const { children } = props;

	const timerContextValue: TimersContextValue = {
		isRunning: false,
		timer: [],
		addTimer: () => {},
		startTimers: () => {},
		stopTimers: () => {},
	};

	return (
		<TimerContext.Provider value={timerContextValue}>{children}</TimerContext.Provider>
	);
}

export default TimerContextProvider;
