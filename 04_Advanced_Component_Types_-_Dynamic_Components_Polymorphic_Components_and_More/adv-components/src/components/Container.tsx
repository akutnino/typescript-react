import { type ElementType } from 'react';

type ContainerProps = {
	as: ElementType;
};

function Container(props: ContainerProps) {
	const { as } = props;

	const Container = as;

	return <Container />;
}

export default Container;
