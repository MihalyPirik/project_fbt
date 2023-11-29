import axios from "axios";

export default {
  getAllBook() {
    return axios.get("http://localhost:8000/api/books")
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err);
        })

  },
};
