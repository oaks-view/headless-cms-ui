import Link from 'next/link';
import Layout from '../../components/Layout';
import StrapiService from '../../services/StrapiService';

const styles = {

};

function Strapi({ blogs }) {
    return (
        <Layout>
            <h2>Strapi client page</h2>
            <p>This screen just fetches blog entries from strapi api's and displays them</p>
            <h4 style={{ color: "#B095C9" }}>Find the blog posts below</h4>

            <div>
                <ul>
                    {blogs.map(blog => {
                        return <li key={blog.id}><Link href="/strapi/[id]" as={`/strapi/${blog.id}`}>{blog.title}</Link></li>
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