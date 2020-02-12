import Link from 'next/link';
import LayoutStrapi from '@root/components/LayoutStrapi';
import StrapiService from '../../services/StrapiService';

function Strapi({ blogs }) {
    return (
        <>
            <p>This screen just fetches blog entries from strapi api's and displays them</p>
            <h4 style={{ color: "#B095C9" }}>Find the blog posts below</h4>

            <div>
                <ul>
                    {blogs.map(blog => {
                        return <li key={blog.id}><Link href="/strapi/[id]" as={`/strapi/${blog.id}`}><a>{blog.title}</a></Link></li>
                    })}
                </ul>
            </div>
        </>
    );
}

Strapi.getInitialProps = async () => {
    const blogs = await StrapiService.getBlogs();

    return {
        blogs
    };
};

Strapi.Layout = LayoutStrapi;

export default Strapi;