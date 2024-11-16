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
	payload?: {};
};

const initialState: CartState = {
	items: [],
};

function cartReducer(currentState: CartState = initialState, action: ActionType) {
	switch (action.type) {
		case 'cart/addItem': {
			return {
				...currentState,
			};
		}

		case 'cart/removeItem': {
			return {
				...currentState,
			};
		}

		default:
			return currentState;
	}
}

export default cartReducer;
