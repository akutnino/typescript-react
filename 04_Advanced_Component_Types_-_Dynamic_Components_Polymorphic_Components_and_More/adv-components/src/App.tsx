import { useRef } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';
import Form from './components/Form';

function App() {
	const inputRef = useRef<HTMLInputElement>(null);
	console.log(inputRef.current);

	const handleSaveFormData = (data: unknown) => {
		const extractedData = data as { name: string; age: string; test: string };
		console.log(extractedData);
	};

	return (
		<main>
			<Form onSave={handleSaveFormData}>
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
