import * as types from "./actionTypes";

const initialState = {
    loading: false,
    data: [],
    error:false
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_DATA_REQ: {
            return {
                ...state,
                loading: true,
                error:false
            }
        }
        case types.GET_DATA_SUCC:{
            return {
                ...state,
                loading: false,
                data:payload
            }
        }
        case types.GET_DATA_FAIL: {
            return {
                ...state,
                loading: false,
                error:true
            }
        }
        default: {
            return {...state}
            }
            
        
    }
}