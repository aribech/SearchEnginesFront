import axios from "axios";

const baseUrl = "https://localhost:44331/api/SearchEngine/"


export default {

    engine(url = baseUrl) {
        return {
            fetchAll: () => axios.get(url+'GetEngines'),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url+'CreateEngine', newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}