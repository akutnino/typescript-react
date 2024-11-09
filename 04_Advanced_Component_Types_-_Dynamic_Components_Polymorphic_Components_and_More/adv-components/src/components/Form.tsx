import { type ComponentPropsWithoutRef } from 'react';

type FromProps = ComponentPropsWithoutRef<'form'>;

function Form(props: FromProps) {
	const { children } = props;

	return <form {...props}>{children}</form>;
}

export default Form;
