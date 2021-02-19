import { useQuery } from "react-query";

const query = async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if (!ok) {
        console.log('throwing error from RQ function')
        throw Error("Error :/");
      }

      //console.log(json);
      return json.body;
    });
};

export default function useMyQuery() {
  return useQuery(["test"], async () => query());
}
