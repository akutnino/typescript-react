import { type FormEvent, type ComponentPropsWithoutRef } from 'react';

type FromProps = ComponentPropsWithoutRef<'form'> & {
	onSave: (value: unknown) => void;
};

function Form(props: FromProps) {
	const { children, onSave, ...otherProps } = props;

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData);

		onSave(data);
	};

	return (
		<form
			onSubmit={handleFormSubmit}
			{...otherProps}
		>
			{children}
		</form>
	);
}

export default Form;
