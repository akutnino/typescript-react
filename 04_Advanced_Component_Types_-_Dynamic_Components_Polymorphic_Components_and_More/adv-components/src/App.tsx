import { useRef } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';
import Form, { type FormHandle } from './components/Form';

function App() {
	const customForm = useRef<FormHandle>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSaveFormData = (data: unknown) => {
		const extractedData = data as { name: string; age: string; test: string };
		console.log(extractedData);
		customForm.current?.clear();
	};

	return (
		<main>
			<Form
				onSave={handleSaveFormData}
				ref={customForm}
			>
				<Input
					id='name'
					label='Your Name'
					type='text'
				/>
				<Input
					id='age'
					label='Your Age'
					type='number'
				/>

				<Input
					id='test'
					label='test'
					type='number'
					ref={inputRef}
				/>

				<Button>Click</Button>
				<Button href='https://google.com'>Click</Button>

				<Container
					as={'button'}
					type='submit'
				>
					Click Me
				</Container>
			</Form>
		</main>
	);
}

export default App;
