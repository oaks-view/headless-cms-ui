import Link from 'next/link';
import Layout from '../../components/Layout';
import StrapiService from '../../services/StrapiService';

const styles = {

};

function Strapi({ blogs }) {
    return (
        <Layout>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: "1.3rem" }}>
                <div style={{backgroundColor: "#3f51b5", padding: "1rem", marginRight: "1.2rem" }}><img src="/static/images/strapi.svg" alt="contenful logo" height={70} width={80} /></div>
                <h2>Strapi's client page</h2>
            </div>
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