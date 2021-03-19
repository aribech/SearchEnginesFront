import { LaptopWindows } from "@material-ui/icons"
import api from "./api"

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}
export const fetchAll = () => dispatch => {
    api.engine().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}
/*
export const create = (data,onSuccess) => 
{
    console.log("hello");
    console.log(data)
}
*/
export const create = (data, onSuccess) => {
    console.log("heeeloooo from here")
    api.engine().create(data)
        .then(
            response => { 
                if(response.data.code==425)
                {
                    onSuccess("L'id que vous avez saisi non disponible")
                }
                console.log(response.data.message+" "+response.data.message)
            }
            //onSuccess()
        )
        .catch(err => console.log(err))
}
