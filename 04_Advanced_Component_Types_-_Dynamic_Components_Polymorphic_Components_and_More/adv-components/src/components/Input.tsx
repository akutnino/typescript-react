import { type ForwardedRef, forwardRef, type ComponentPropsWithoutRef } from 'react';

type InputProps = {
	label: string;
	id: string;
} & ComponentPropsWithoutRef<'input'>;

function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
	const { label, id, ...inputElementProps } = props;

	return (
		<p>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				name={id}
				ref={ref}
				{...inputElementProps}
			/>
		</p>
	);
}

export default forwardRef<HTMLInputElement, InputProps>(Input);
