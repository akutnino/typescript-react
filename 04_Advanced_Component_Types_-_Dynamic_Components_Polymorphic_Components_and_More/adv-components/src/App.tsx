import Button from './components/Button';
import Input from './components/Input';

function App() {
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

			<Button element='button'>Click</Button>
			<Button
				element='anchor'
				href='https://google.com'
			>
				Click
			</Button>
		</main>
	);
}

export default App;
