import Input from './components/Input';

function App() {
	return (
		<main>
			<Input
				id='name'
				label='Your Name'
				inputProps={{ type: 'text' }}
			/>
			<Input
				id='age'
				label='Your Age'
				inputProps={{ type: 'number' }}
			/>
		</main>
	);
}

export default App;
