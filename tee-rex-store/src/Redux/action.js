import * as types from "./actionTypes";
import axios from "axios";

const getDataReq = () => ({ type: types.GET_DATA_REQ });
const getDataSucc = (payload) => ({ type: types.GET_DATA_SUCC,payload });
const getDataFail = () => ({ type: types.GET_DATA_FAIL });

const getData = () => (dispatch) => {
    dispatch(getDataReq());
    axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
        .then((res) => {
            // console.log(res);
            dispatch(getDataSucc(res.data))
        })
        .catch(() => dispatch(getDataFail()));
};

export {getData}
// https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json