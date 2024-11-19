export type CartItem = {
	id: string;
	title: string;
	price: number;
	quantity: number;
};

type CartState = {
	items: CartItem[];
};

export type CardAddItem = {
	type: string;
	payload: CartItem;
};

type CardRemoveItem = {
	type: string;
	payload: number;
};

type ActionType = CardAddItem | CardRemoveItem;

const initialState: CartState = {
	items: [],
};

function cartReducer(currentState: CartState = initialState, action: ActionType) {
	switch (action.type) {
		case 'cart/addItem': {
			const addItemAction = action as CardAddItem;

			const updatedQuantityArray: CartItem[] = currentState.items.map((item) =>
				item.id === addItemAction.payload.id
					? { ...item, quantity: item.quantity + addItemAction.payload.quantity }
					: item
			);

			// prettier-ignore
			const updatedArray: CartItem[] = currentState.items.length === 0 
				? [addItemAction.payload] 
				: updatedQuantityArray;

			return {
				...currentState,
				items: updatedArray,
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
