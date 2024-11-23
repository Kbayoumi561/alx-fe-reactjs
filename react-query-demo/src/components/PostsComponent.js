import { useQuery } from 'react-query';

// Function to fetch posts from the API
const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const PostsComponent = () => {
    // Step 1: Use `useQuery` to fetch posts
    const {
        data: posts,
        error,
        isLoading,
        refetch, // Step 2: Extract `refetch` from useQuery
    } = useQuery('posts', fetchPosts);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={refetch} style={{ marginBottom: '20px' }}>
                Refetch Posts
            </button>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;