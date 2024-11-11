import {
	type FormEvent,
	type ComponentPropsWithoutRef,
	forwardRef,
	useImperativeHandle,
	useRef,
} from 'react';

export type FormHandle = {
	clear: () => void;
};

type FromProps = ComponentPropsWithoutRef<'form'> & {
	onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FromProps>(function Form(props, ref) {
	const { children, onSave, ...otherProps } = props;
	const formRef = useRef<HTMLFormElement>(null);

	useImperativeHandle(ref, () => {
		return {
			clear() {
				formRef.current?.reset();
			},
		};
	});

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData);

		onSave(data);
	};

	return (
		<form
			ref={formRef}
			onSubmit={handleFormSubmit}
			{...otherProps}
		>
			{children}
		</form>
	);
});

export default Form;
