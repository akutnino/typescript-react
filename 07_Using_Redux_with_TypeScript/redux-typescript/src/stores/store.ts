import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore,
} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import cartReducer from './reducers/cartReducer.ts';

const rootReducer = combineReducers({
	cart: cartReducer,
});

const preLoadedState: Partial<{ cart: never }> = { cart: undefined };

const store = createStore(
	rootReducer,
	preLoadedState,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
