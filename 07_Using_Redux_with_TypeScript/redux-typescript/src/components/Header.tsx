import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCartTotalQuantity } from '../stores/selectors/cartSelector.ts';
import Cart from './Cart.tsx';

export default function Header() {
	const [cartIsVisible, setCartIsVisible] = useState(false);
	const totalCartQuantity = useSelector(getCartTotalQuantity);

	const handleOpenCartClick = () => {
		setCartIsVisible(true);
	};

	const handleCloseCartClick = () => {
		setCartIsVisible(false);
	};

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
					<button onClick={handleOpenCartClick}>Cart ({totalCartQuantity})</button>
				</p>
			</header>
		</>
	);
}
