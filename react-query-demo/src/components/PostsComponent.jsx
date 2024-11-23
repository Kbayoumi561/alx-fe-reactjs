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
    // React Query hook with error and loading state handling
    const {
        data: posts,
        isError, // To handle errors
        error,   // To display the error message
        isLoading,
        refetch,
    } = useQuery('posts', fetchPosts);

    // Render loading state
    if (isLoading) return <div>Loading...</div>;

    // Render error state
    if (isError) return <div>Error: {error.message}</div>;

    // Render fetched posts
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