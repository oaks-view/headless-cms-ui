import ReactMarkdown from "react-markdown";
import LayoutContentful from '@components/LayoutContentful';
import ContentfulService from '@services/ContentfulService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import * as _ from 'lodash';

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
    },
    bookCover: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '60%',
        minheight: '40rem'
    },
    coverPhoto: {
        width: '30%',
        marginRight: '1.2rem',
    },
    firstPage: {
        width: '65%',
    }
};

function ContentfulBookDetailPage({ book }) {
    const coverPhotoUrl = _.get(book, 'fields.coverPhoto.fields.file.url');
    return (
        <>
            <h2>Contentful Book detail page</h2>
            <h4 style={styles.bookTitle}>{book.fields.title}, by - {book.fields.author}</h4>
            <div style={styles.bookCover}>
                <img src={coverPhotoUrl} alt='image not found' height={90} width={50}/>
                <div style={styles.firstPage}>{documentToReactComponents(book.fields.firstPage)}</div>
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