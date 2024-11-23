import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const { id } = useParams(); // Extract the dynamic id parameter

    return (
        <div>
            <h2>Blog Post {id}</h2>
            <p>This is the content of blog post with ID: {id}.</p>
        </div>
    );
};

export default BlogPost;