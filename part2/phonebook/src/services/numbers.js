import { Axios } from "axios";

const BASEURL = "http://localhost:3001";

const axios = new Axios({ baseURL: BASEURL });

async function getAll() {
  return await axios
    .get("/persons")
    .then((res) => JSON.parse(res.data))
    .catch((e) => Promise.reject(e));
}

/**
 * @param {{name: string, number: string}} newPerson
 */
async function add(newPerson) {
  return await axios
    .post("/persons", newPerson)
    .catch((e) => Promise.reject(e));
}

async function _delete(id) {
  return await axios.delete(`/persons/${id}`)
}

const numbers = {
  getAll,
  add,
  delete: _delete
};

export default numbers;
