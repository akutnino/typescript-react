import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
	element: 'button';
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
	element: 'anchor';
} & ComponentPropsWithoutRef<'a'>;

function Button(props: ButtonProps | AnchorProps) {
	const { element } = props;

	return (
		<>
			{element === 'anchor' && (
				<a
					className='button'
					{...props}
				/>
			)}

			{element === 'button' && (
				<button
					className='button'
					{...props}
				/>
			)}
		</>
	);
}

export default Button;
