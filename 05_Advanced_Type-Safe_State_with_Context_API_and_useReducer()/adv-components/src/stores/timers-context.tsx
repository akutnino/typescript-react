import { createContext, useContext, useReducer, type ReactNode } from 'react';

export type Timer = {
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

type StartTimersAction = {
	type: 'START_TIMERS';
};

type StopTimersAction = {
	type: 'STOP_TIMERS';
};

type AddTimerAction = {
	type: 'ADD_TIMER';
	payload: Timer;
};

type ActionType = StartTimersAction | StopTimersAction | AddTimerAction;

function timerReducer(currentState: TimerState, action: ActionType): TimerState {
	switch (action.type) {
		case 'START_TIMERS': {
			return {
				...currentState,
				isRunning: true,
			};
		}

		case 'STOP_TIMERS': {
			return {
				...currentState,
				isRunning: false,
			};
		}

		case 'ADD_TIMER': {
			const newTimerObject: Timer = {
				name: action.payload.name,
				duration: action.payload.duration,
			};

			return {
				...currentState,
				timer: [...currentState.timer, newTimerObject],
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
		isRunning: state.isRunning,
		timer: state.timer,
		addTimer: (timerData) => {
			dispatch({ type: 'ADD_TIMER', payload: timerData });
		},
		startTimers: () => {
			dispatch({ type: 'START_TIMERS' });
		},
		stopTimers: () => {
			dispatch({ type: 'STOP_TIMERS' });
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
