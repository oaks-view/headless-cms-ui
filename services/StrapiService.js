import Api from './Api';

const strapiHost = 'http://127.0.0.1:3000';
const api = Api(strapiHost);

export default class StrapiService {
    static getBlogs() {
        return api.get('/blogs');
    }

    static getBlogById(id) {
        return api.get(`/blogs/${id}`);
    }
}