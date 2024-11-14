import { useEffect, useState } from 'react';
import { get } from './utils/http.ts';
import BlogPosts, { BlogPost } from './components/BlogPosts.tsx';
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

	useEffect(() => {
		const fetchPosts = async () => {
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
		};

		fetchPosts();
		return () => {};
	}, []);

	return (
		<main>
			<img
				src={fetchImg}
				alt='fetching image'
			/>
			<BlogPosts posts={fetchedPosts} />
		</main>
	);
}

export default App;
