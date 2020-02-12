import Link from 'next/link';
import Layout from '../../components/Layout';
// import ContentfulService from '../../services/ContentfulService';
import ContentfulService from '../../services/ContentfulService';

function Contentful({ books }) {
    return (
        <Layout>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center",  marginTop: "1.3rem" }}>
                <div style={{ backgroundColor: "#3f51b5", padding: "1rem", marginRight: "1.2rem" }}>
                    <img src="/images/contentful.svg" alt="contenful logo" height={40} width={40} />
                </div>
                <h2>Contentful client page</h2>
            </div>
            <p>This screen fetches books from contentful and displays them</p>
            <h4 style={{ color: "#B095C9" }}>Find the book posts below</h4>

            <div>
                <ul>
                    {books.map(book => {
                        return <li key={book.sys.id}><Link href="/contentful/[id]" as={`/contentful/${book.sys.id}`}><a>{book.fields.title}</a></Link></li>
                    })}
                </ul>
            </div>
        </Layout>
    );
}

Contentful.getInitialProps = async () => {
    const books = await ContentfulService.getBooks();

    return {
        books
    };
};

export default Contentful;