type CartItem = {
	id: string;
	title: string;
	price: number;
	quantity: number;
};

type CartState = {
	items: CartItem[];
};

type ActionType = {
	type: string;
	payload: any;
};

const INITIAL_STATE: CartState = {
	items: [],
};

function cartReducer(currentState = INITIAL_STATE, action: ActionType) {
	switch (action.type) {
		case '': {
			return;
		}

		default:
			return currentState;
	}
}

export default cartReducer;
