import axios from "axios";

export default {
  getAllBook() {
    return axios
      .get("http://localhost:8000/api/books")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getAllAuthor() {
    return axios
      .get("http://localhost:8000/api/get-all-authors")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getBooksbyAuthor(authorName) {
    return axios
      .get("http://localhost:8000/api/book-by-author/" + authorName)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
