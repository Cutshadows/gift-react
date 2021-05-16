import { types } from "../types/types";

const {
    LOGIN,
    LOGOUT
}=types;

export const authReducer=(state={}, action)=>{
    switch (action.type) {
        case LOGIN:
            return {
                ...action.payload,
                logged:true
            }
        case LOGOUT:    
            return {
                logged:false
            }
        default:
            return state;
    }
}