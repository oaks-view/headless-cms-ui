import Layout from '../../../components/Layout';
import StrapiService from '../../../services/StrapiService';

const styles = {

};

function Strapi({ blog }) {
    return (
        <Layout>
            <h2>Strapi Blog detail page</h2>
            <h4 style={{ color: "#B095C9" }}>{blog.title}</h4>

            <div>
                {blog.body}
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