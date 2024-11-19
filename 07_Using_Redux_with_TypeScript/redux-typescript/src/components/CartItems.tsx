import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCartItemsArray } from '../stores/selectors/cartSelector.ts';
import { type CartItem } from '../stores/reducers/cartReducer.ts';
import { addItem, removeItem } from '../stores/actions/cartAction.ts';

export default function CartItems() {
	const dispatch = useDispatch();
	const itemsArray = useSelector(getCartItemsArray);
	const totalPrice = itemsArray.reduce(
		(acc, curr) => acc + curr.price * curr.quantity,
		0
	);
	const formattedTotalPrice = totalPrice.toFixed(2);

	const handleRemoveFromCart = (cartItemID: string) => {
		return () => dispatch(removeItem(cartItemID));
	};

	const handleAddToCart = (cartItemObject: CartItem) => {
		return () => dispatch(addItem(cartItemObject));
	};

	return (
		<div id='cart'>
			{itemsArray.length === 0 && <p>No items in cart!</p>}

			<ul id='cart-items'>
				{itemsArray.map((item) => {
					const formattedPrice = `$${item.price.toFixed(2)}`;

					return (
						<li key={item.id}>
							<div>
								<span>{item.title}</span>
								<span> ({formattedPrice})</span>
							</div>
							<div className='cart-item-actions'>
								<button onClick={handleRemoveFromCart(item.id)}>-</button>
								<span>{item.quantity}</span>
								<button onClick={handleAddToCart(item)}>+</button>
							</div>
						</li>
					);
				})}
			</ul>

			<p id='cart-total-price'>
				Cart Total: <strong>${formattedTotalPrice}</strong>
			</p>
		</div>
	);
}
