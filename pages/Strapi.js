import Layout from '../components/Layout';
import StrapiService from '../services/StrapiService';

function Strapi({ blogs }) {
    return (
        <Layout>
            <h2>Strapi client page</h2>
            <p>This screen just fetches blog entries from strapi api's and displays them</p>
            <h4>Find the blog posts below</h4>

            <div>
                <ul>
                    {blogs.map(blog => {
                        return <li>{blog.title}</li>
                    })}
                </ul>
            </div>
        </Layout>
    );
}

Strapi.getInitialProps = async () => {
    const blogs = await StrapiService.getBlogs();

    return {
        blogs
    };
};

export default Strapi;