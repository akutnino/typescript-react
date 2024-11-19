import { CardAddItem, CartItem, CartRemoveItem } from '../reducers/cartReducer.ts';

export function addItem(newItemObject: CartItem): CardAddItem {
	return { type: 'cart/addItem', payload: newItemObject };
}

export function removeItem(itemID: string): CartRemoveItem {
	return { type: 'cart/removeItem', payload: itemID };
}
