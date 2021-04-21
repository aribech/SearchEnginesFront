
import api from "./api";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};
export const fetchAll = () => (dispatch) => {
  api
    .engine()
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};
export const create = (data, onSuccess) => {
  api
    .engine()
    .create(data)
    .then((response) => {
      if (response.data.code === 425) {
        onSuccess(response.data.message);
      }
      console.log(response.data.message + " " + response.data.message);
    })
    .catch((err) => console.log(err));
};

export const update = (code, data, onSuccess) => (dispatch) =>{
  api
    .engine()
    .update(code, data)
    .then((res) => {
      if (res.data.code === 424) {
        onSuccess(res.data.message);
      }
      console.log(res.data.message + " " + res.data.message);
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const Delete = (code, onSuccess) => {
  console.log("test deletteeeeeeee");
  api
    .engine()
    .delete(code)
    .then((res) => {
      onSuccess(res.data.message);
    })
    .catch((err) => console.log(err));
};
