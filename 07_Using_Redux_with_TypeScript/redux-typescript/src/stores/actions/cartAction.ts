import { CardAddItem, CartItem } from '../reducers/cartReducer.ts';

export function addItem(newItemObject: CartItem) {
	return { type: 'cart/addItem', payload: newItemObject } as CardAddItem;
}
