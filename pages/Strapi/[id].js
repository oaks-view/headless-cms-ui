import ReactMarkdown from "@root/pages/strapi/@root/pages/contentful/react-markdown";
import LayoutStrapi from '@root/pages/strapi/@components/LayoutStrapi';
import StrapiService from '@root/pages/strapi/@services/StrapiService';

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

function StrapiBlogDetailPage({ blog }) {
    return (
        <>
            <h2>Strapi Blog detail page</h2>
            <h4 style={styles.blogHeading}>{blog.title}</h4>

            <div>
                {/* {blog.body} */}
                <ReactMarkdown source={blog.body}/>
            </div>
        </>
    );
}

StrapiBlogDetailPage.getInitialProps = async ctx => {
    const {
        query: { id },
      } = ctx;
    const blog = await StrapiService.getBlogById(id);

    return {
        blog
    };
};

StrapiBlogDetailPage.Layout = LayoutStrapi;

export default StrapiBlogDetailPage;