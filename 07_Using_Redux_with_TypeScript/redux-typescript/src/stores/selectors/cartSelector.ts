import { type RootState } from '../store.ts';

export const getCartTotalQuantity = (store: RootState) => {
	return store.cart.items.reduce((acc, curr) => curr.quantity + acc, 0);
};

export const getCartItemsArray = (store: RootState) => {
	return store.cart.items;
};
