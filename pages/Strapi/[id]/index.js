import ReactMarkdown from "react-markdown";
import Layout from '../../../components/Layout';
import StrapiService from '../../../services/StrapiService';

const styles = {
    container: {
        color: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    blogHeading: {
        color: "#ffff",
        backgroundColor: '#023879'
    }
};

function Strapi({ blog }) {
    return (
        <Layout>
            <h2>Strapi Blog detail page</h2>
            <h4 style={styles.blogHeading}>{blog.title}</h4>

            <div>
                {/* {blog.body} */}
                <ReactMarkdown source={blog.body}/>
            </div>
        </Layout>
    );
}

Strapi.getInitialProps = async ctx => {
    const {
        query: { id },
      } = ctx;
    const blog = await StrapiService.getBlogById(id);

    return {
        blog
    };
};

export default Strapi;