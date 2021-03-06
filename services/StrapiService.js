import Api from './Api';

const strapiHost = 'https://cms-strapi-mz.herokuapp.com';
const api = Api(strapiHost);

export default class StrapiService {
    static getBlogs() {
        return api.get('/blogs?_sort=created_at:desc');
    }

    static getBlogById(id) {
        return api.get(`/blogs/${id}`);
    }
}