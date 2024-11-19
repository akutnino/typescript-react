import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cart from './Cart.tsx';
import { addItem, removeItem } from '../stores/actions/cartAction.ts';

export default function Header() {
	const [cartIsVisible, setCartIsVisible] = useState(false);
	const dispatch = useDispatch();

	function handleOpenCartClick() {
		setCartIsVisible(true);
		// dispatch(addItem({ id: '1', price: 10, quantity: 20, title: 'test' }));
		// dispatch(addItem({ id: '2', price: 10, quantity: 20, title: 'test' }));
		// dispatch(addItem({ id: '3', price: 10, quantity: 20, title: 'test' }));
		dispatch(removeItem('3'));
	}

	function handleCloseCartClick() {
		setCartIsVisible(false);
	}

	return (
		<>
			{cartIsVisible && <Cart onClose={handleCloseCartClick} />}
			<header id='main-header'>
				<div id='main-title'>
					<img
						src='logo.png'
						alt='Elegant model'
					/>
					<h1>Elegant Redux</h1>
				</div>
				<p>
					<button onClick={handleOpenCartClick}>Cart (0)</button>
				</p>
			</header>
		</>
	);
}
