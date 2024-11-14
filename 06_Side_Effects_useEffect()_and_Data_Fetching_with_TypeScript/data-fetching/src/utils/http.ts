export async function get(url: string) {
	const fetchOptions = {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'Application/json',
		},
	};

	const response = await fetch(url, fetchOptions);
	if (!response.ok) throw new Error('FETCH REQUEST FAILED.');

	const data = (await response.json()) as unknown;

	return data;
}
