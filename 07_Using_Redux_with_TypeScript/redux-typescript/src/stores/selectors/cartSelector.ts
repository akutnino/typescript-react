import { RootState } from '../store.ts';

export const getCartTotalQuantity = (store: RootState) => {
	return store.cart.items.reduce((acc, curr) => curr.quantity + acc, 0);
};
