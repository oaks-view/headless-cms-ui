// this script contains some sample interactions with the CDA
const contentful = require("contentful");

const client = contentful.createClient({
    space: "2h1x69tsm0oh",
    accessToken: "XNNF69qwJCJbUao4IJ2dLA95vBORR5crqoFbFnc-4R4"
});

export default class ContentfulService {
    static getBooks() {
        return client
            .getEntries({
                content_type: "book",
                //   locale: '*',
                //   locale: 'de',
                locale: 'en-US',
                select: 'sys.id,fields.title,fields.author,fields.publicationDate'
            })
            .then(response => response.items)
            .catch(console.error);
    }

    static getBookById(id) {
      return client.getEntry(id)
      .then(entry => entry)
      .catch(console.error)
    }
}