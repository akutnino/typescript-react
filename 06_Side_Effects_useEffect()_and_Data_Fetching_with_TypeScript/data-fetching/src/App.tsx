import { useEffect, useState } from 'react';
import { get } from './utils/http.ts';
import BlogPosts, { BlogPost } from './components/BlogPosts.tsx';
import ErrorMessage from './components/ErrorMessage.tsx';
import fetchImg from './assets/data-fetching.png';

type RawDataBlogPost = {
	id: number;
	userId: number;
	title: string;
	body: string;
};

const fetchURL = 'https://jsonplaceholder.typicode.com/posts';

function App() {
	const [fetchedPosts, setFetchedPost] = useState<BlogPost[] | []>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [fetchErrorMessage, setfetchErrorMessage] = useState('');

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				setIsLoading(true);
				const data = (await get(fetchURL)) as RawDataBlogPost[];

				const blogPosts: BlogPost[] = data.map((postObject) => {
					const blogPostObject: BlogPost = {
						id: postObject.id,
						title: postObject.title,
						text: postObject.body,
					};

					return blogPostObject;
				});

				setFetchedPost((currentPosts) => [...currentPosts, ...blogPosts]);
			} catch (error) {
				if (error instanceof Error) {
					setfetchErrorMessage((error as Error).message);
				}
			} finally {
				setIsLoading(false);
			}
		};

		fetchPosts();
		return () => {
			setFetchedPost([]);
		};
	}, []);

	console.log(Boolean(fetchErrorMessage));

	return (
		<main>
			<img
				src={fetchImg}
				alt='fetching image'
			/>
			{Boolean(fetchErrorMessage) && <ErrorMessage text={fetchErrorMessage} />}

			{isLoading ? (
				<p id='loading-fallback'>Fetching posts...</p>
			) : (
				<BlogPosts posts={fetchedPosts} />
			)}
		</main>
	);
}

export default App;
