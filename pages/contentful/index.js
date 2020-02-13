import Link from 'next/link';
import LayoutContentful from '@components/LayoutContentful';
import ContentfulService from '@services/ContentfulService';

function Contentful({ books }) {
    return (
        <>
            <p>This screen fetches books from contentful and displays them</p>
            <h4 style={{ color: "#B095C9" }}>Find the book posts below</h4>

            <div>
                <ul>
                    {books.map(book => {
                        return <li key={book.sys.id}><Link href="/contentful/[id]" as={`/contentful/${book.sys.id}`}><a>{book.fields.title}</a></Link></li>
                    })}
                </ul>
            </div>
        </>
    );
}

Contentful.getInitialProps = async () => {
    const books = await ContentfulService.getBooks();

    return {
        books
    };
};

Contentful.Layout = LayoutContentful;

export default Contentful;