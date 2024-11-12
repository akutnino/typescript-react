import { createContext, useContext, useReducer, type ReactNode } from 'react';

type Timer = {
	name: string;
	duration: number;
};

type TimerState = {
	isRunning: boolean;
	timer: Timer[];
};

const INITIAL_STATE: TimerState = {
	isRunning: false,
	timer: [],
};

type TimersContextValue = TimerState & {
	addTimer: (timerData: Timer) => void;
	startTimers: () => void;
	stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

type TimerContextProviderProps = {
	children: ReactNode;
};

function TimerContextProvider(props: TimerContextProviderProps) {
	const { children } = props;
	useReducer(reducerFN, INITIAL_STATE);

	const timerContextValue: TimersContextValue = {
		isRunning: false,
		timer: [],
		addTimer: () => {},
		startTimers: () => {},
		stopTimers: () => {},
	};

	return (
		<TimersContext.Provider value={timerContextValue}>{children}</TimersContext.Provider>
	);
}

function useTimersContext() {
	const timerContextValue = useContext(TimersContext);
	const ERROR_MESSAGE = `useTimersContext is used outside the TimerContextProvider's scope.`;
	const contextIsNotValid = timerContextValue === null || timerContextValue === undefined;

	if (contextIsNotValid) throw new Error(ERROR_MESSAGE);
	return timerContextValue;
}

export { TimerContextProvider as default, useTimersContext };
