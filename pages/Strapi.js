import Layout from '../components/Layout';
import '../styles/main.scss';

export default function Strapi() {
    return (
        <Layout>
            <h2>Strapi client page</h2>
            <p>This screen just fetches blog entries from strapi api's and displays them</p>
        </Layout>
    );
}