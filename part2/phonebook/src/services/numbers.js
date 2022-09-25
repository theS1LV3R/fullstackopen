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
    .post("/persons", JSON.stringify(newPerson), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => JSON.parse(res.data))
    .catch((e) => Promise.reject(e));
}

async function _delete(id) {
  return await axios.delete(`/persons/${id}`).catch((e) => Promise.reject(e));
}

/**
 * @param {{name: string, number: string}} newData
 */
async function update(id, newData) {
  return await axios
    .patch(`/persons/${id}`, JSON.stringify(newData), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((e) => Promise.reject(e));
}

const numbers = {
  getAll,
  add,
  delete: _delete,
  update,
};

export default numbers;
