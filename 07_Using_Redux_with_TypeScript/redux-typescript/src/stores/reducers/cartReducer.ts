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

export type CartRemoveItem = {
	type: string;
	payload: string;
};

type ActionType = CardAddItem | CartRemoveItem;

const initialState: CartState = {
	items: [],
};

function cartReducer(currentState: CartState = initialState, action: ActionType) {
	switch (action.type) {
		case 'cart/addItem': {
			const addItemAction = action as CardAddItem;

			const updateArrayFunc = (props: [CartItem, CartState]): CartItem[] => {
				const [payload, currState] = props;

				const isCartItemIdFound: boolean = currState.items
					.map((item) => item.id)
					.includes(payload.id);

				const updatedQuantityArray: CartItem[] = currState.items.map((item) =>
					item.id === payload.id
						? { ...item, quantity: item.quantity + payload.quantity }
						: item
				);

				const updatedObjectArray: CartItem[] = isCartItemIdFound
					? updatedQuantityArray
					: [...currState.items, payload];

				return updatedObjectArray;
			};

			// prettier-ignore
			const updatedArray: CartItem[] = currentState.items.length === 0 
			? [addItemAction.payload] 
			: updateArrayFunc([addItemAction.payload, currentState]);

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
