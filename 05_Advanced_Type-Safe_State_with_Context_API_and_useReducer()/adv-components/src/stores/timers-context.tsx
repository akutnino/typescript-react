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

type ActionType = {
	type: 'ADD_TIMER' | 'START_TIMERS' | 'STOP_TIMERS';
	payload: { value: any };
};

function timerReducer(currentState: TimerState, action: ActionType): TimerState {
	switch (action.type) {
		case 'ADD_TIMER': {
			return {
				...currentState,
			};
		}

		case 'START_TIMERS': {
			return {
				...currentState,
			};
		}

		case 'STOP_TIMERS': {
			return {
				...currentState,
			};
		}

		default:
			return currentState;
	}
}

function TimerContextProvider(props: TimerContextProviderProps) {
	const { children } = props;
	const [state, dispatch] = useReducer(timerReducer, INITIAL_STATE);

	const timerContextValue: TimersContextValue = {
		isRunning: false,
		timer: [],
		addTimer: () => {
			dispatch({ type: 'ADD_TIMER', payload: { value: null } });
		},
		startTimers: () => {
			dispatch({ type: 'START_TIMERS', payload: { value: null } });
		},
		stopTimers: () => {
			dispatch({ type: 'STOP_TIMERS', payload: { value: null } });
		},
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
