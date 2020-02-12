import ReactMarkdown from "react-markdown";
import LayoutContentful from '@components/LayoutContentful';
import ContentfulService from '@services/ContentfulService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const styles = {
    container: {
        color: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookTitle: {
        color: "#ffff",
        backgroundColor: '#023879'
    }
};

function ContentfulBookDetailPage({ book }) {
    return (
        <>
            <h2>Contentful Book detail page</h2>
            <h4 style={styles.bookTitle}>{book.fields.title}, by - {book.fields.author}</h4>
            <div>
                {documentToReactComponents(book.fields.firstPage)}
            </div>
        </>
    );
}

ContentfulBookDetailPage.getInitialProps = async ctx => {
    const {
        query: { id },
    } = ctx;
    const book = await ContentfulService.getBookById(id);
    console.log('[Contentful][index] book: %j', book);

    return {
        book
    };
};

ContentfulBookDetailPage.Layout = LayoutContentful;

export default ContentfulBookDetailPage;