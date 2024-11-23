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
    // React Query hook with additional options for caching
    const {
        data: posts,
        isError,
        error,
        isLoading,
        refetch,
    } = useQuery('posts', fetchPosts, {
        cacheTime: 300000, // Cache data for 5 minutes (300,000 ms)
        staleTime: 60000, // Mark data as fresh for 1 minute (60,000 ms)
        refetchOnWindowFocus: true, // Refetch data when the window regains focus
        keepPreviousData: true, // Retain the previous data while fetching new data
    });

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