import { type ReactNode } from 'react';

type HeaderProps = {
	image: {
		src: string;
		alt: string;
	};
	children: ReactNode;
};

function Header(props: HeaderProps) {
	const { image, children } = props;

	return (
		<header>
			<img
				src={image.src}
				alt={image.alt}
			/>
			{children}
		</header>
	);
}

export default Header;
