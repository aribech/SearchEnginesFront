import axios from "axios";

const baseUrl = "https://localhost:44331/api/SearchEngine/"
const CreateUrl=baseUrl+"CreateEngine"
const GetUrl=baseUrl+"GetEngines"
const GetByCodeUrl=baseUrl+"GetEngineByCode/"
const DeleteUrl=baseUrl+"DeleteEngineByCode/"
const UpdateUrl=baseUrl+"UpdateEngine/"


export default {

    engine(url = baseUrl) {
        return {
            fetchAll: () => axios.get(GetUrl),
            fetchById: code => axios.get(GetByCodeUrl + code),
            create: newRecord => axios.post(CreateUrl, newRecord),
            update: (code, updateRecord) => axios.put(UpdateUrl + code, updateRecord),
            delete: code => axios.delete(DeleteUrl + code)
        }
    }
}