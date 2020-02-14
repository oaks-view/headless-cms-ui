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
        width: '80%',
        marginRight: '1.2rem',
    },
    imageContainer: {
        width: 200,
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        marginRight: '3rem'
    },
    firstPage: {
        width: '65%',
        height: '18rem'
    }
};

function ContentfulBookDetailPage({ book }) {
    const coverPhotoUrl = _.get(book, 'fields.coverPhoto.fields.file.url');
    return (
        <>
            <h2>Contentful Book detail page</h2>
            <h4 style={styles.bookTitle}>{book.fields.title}, by - {book.fields.author}</h4>
            <div style={styles.bookCover}>
                <div style={styles.imageContainer}>
                    <img src={coverPhotoUrl} alt='image not found' style={styles.coverPhoto} />
                </div>
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