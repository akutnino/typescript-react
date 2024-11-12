import { type ReactNode, type ElementType, type ComponentPropsWithoutRef } from 'react';

type ContainerProps<T extends ElementType> = {
	as?: T;
	children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>(props: ContainerProps<C>) {
	const { as, children, ...containerElementProps } = props;

	const Container = as || 'div';

	return <Container {...containerElementProps}>{children}</Container>;
}

export default Container;
