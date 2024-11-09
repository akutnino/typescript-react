import { useRef } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';

function App() {
	const inputRef = useRef<HTMLInputElement>(null);
	console.log(inputRef.current);

	return (
		<main>
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

			<Container as={'button'}>Click Me</Container>
		</main>
	);
}

export default App;
