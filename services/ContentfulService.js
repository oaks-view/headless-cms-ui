// this script contains some sample interactions with the CDA
const contentful = require("contentful");

const client = contentful.createClient({
    space: "2h1x69tsm0oh",
    //   environment: 'master', // defaults to 'master' if not set
    accessToken: "XNNF69qwJCJbUao4IJ2dLA95vBORR5crqoFbFnc-4R4"
});

// get a specific content type
// client.getContentType('book').then(res => console.log(JSON.stringify(res, null, 2))).catch(err => console.log)

// get all content types
// client.getContentTypes()
// .then((response) => console.log('The query result is: ', JSON.stringify(response.items, null, 2)))
// .catch(console.error)

// get all entries (records)
// client.getEntries()
// .then((response) => console.log(JSON.stringify(response.items, null, 2)))
// .catch(console.error)

// get entries with filters
// 1. only book entries
// 2. only customer entries with profile pictures
// client
//   .getEntries({
//     content_type: "book",
//        select: 'sys.id,fields.title,fields.author,fields.publicationDate',
// //     select: "fields.title,fields.author,fields.publicationDate"
//   })
//   .then(response => {
//     console.log(JSON.stringify(response.items, null, 2));
//     console.log("length: %j", response.items.length);
//   })
//   .catch(console.error);


/*
// get  only customer that have profile image
client
  .getEntries({
    content_type: "customer",
       select: 'sys.id,fields.firstName,fields.lastName,fields.email,fields.profileImage',
  'fields.profileImage[exists]': true
  })
  .then(response => {
    console.log(JSON.stringify(response.items, null, 2));
    console.log("length: %j", response.items.length);
  })
  .catch(console.error);

  // with localisation included
  // get entries with filters
// 1. only book entries
// 2. only customer entries with profile pictures
client
.getEntries({
  content_type: "book",
//   locale: '*',
//   locale: 'de',
locale: 'en-US',
     select: 'sys.id,fields.title,fields.author,fields.publicationDate',
//     select: "fields.title,fields.author,fields.publicationDate"
})
.then(response => {
  console.log(JSON.stringify(response.items, null, 2));
  console.log("length: %j", response.items.length);
})
.catch(console.error);

*/

export default class ContentfulService {
    static getBooks() {
        return client
            .getEntries({
                content_type: "book",
                //   locale: '*',
                //   locale: 'de',
                locale: 'en-US',
                select: 'sys.id,fields.title,fields.author,fields.publicationDate',
                //     select: "fields.title,fields.author,fields.publicationDate"
            })
            .then(response => response.items)
            .catch(console.error);
    }

    static getBook(id) {
        //
    }
}