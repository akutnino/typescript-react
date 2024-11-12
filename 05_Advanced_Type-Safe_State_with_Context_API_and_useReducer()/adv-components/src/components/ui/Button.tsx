import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
	href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
	href?: string;
};

function isAnchor(props: ButtonProps | AnchorProps): props is AnchorProps {
	return 'href' in props;
}

function Button(props: ButtonProps | AnchorProps) {
	if (isAnchor(props)) {
		return (
			<a
				className='button'
				{...props}
			/>
		);
	}
	return (
		<button
			className='button'
			{...props}
		/>
	);
}

export default Button;
