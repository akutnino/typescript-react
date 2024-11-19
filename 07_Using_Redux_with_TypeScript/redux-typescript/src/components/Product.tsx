import { useDispatch } from 'react-redux';
import { addItem } from '../stores/actions/cartAction.ts';

type ProductProps = {
	id: string;
	image: string;
	title: string;
	price: number;
	description: string;
};

export default function Product({ id, image, title, price, description }: ProductProps) {
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(addItem({ id, title, price, quantity: 1 }));
	};

	return (
		<article className='product'>
			<img
				src={image}
				alt={title}
			/>
			<div className='product-content'>
				<div>
					<h3>{title}</h3>
					<p className='product-price'>${price}</p>
					<p>{description}</p>
				</div>
				<p className='product-actions'>
					<button onClick={handleAddToCart}>Add to Cart</button>
				</p>
			</div>
		</article>
	);
}
