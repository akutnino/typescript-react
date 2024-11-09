import { type ForwardedRef, forwardRef, type ComponentPropsWithoutRef } from 'react';

type InputProps = {
	label: string;
	id: string;
} & ComponentPropsWithoutRef<'input'>;

function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
	const { label, id, ...inputProps } = props;

	return (
		<p>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				name={id}
				ref={ref}
				{...inputProps}
			/>
		</p>
	);
}

export default forwardRef<HTMLInputElement, InputProps>(Input);
