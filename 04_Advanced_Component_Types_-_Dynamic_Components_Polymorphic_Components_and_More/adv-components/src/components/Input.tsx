import { ComponentPropsWithoutRef } from 'react';

type InputProps = {
	label: string;
	id: string;
	inputProps: ComponentPropsWithoutRef<'input'>;
};

function Input(props: InputProps) {
	const { label, id, inputProps } = props;

	return (
		<p>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				{...inputProps}
			/>
		</p>
	);
}

export default Input;
