import { userConstants } from './constants';
import axiosInstance from "../helpers/axios";

export const signup = (user) => async (dispatch) => {
    dispatch({
        type: userConstants.USER_REGISTER_REQUEST
    })
    
    try {
        const res = await axiosInstance.post('/signup', {
            ...user
        });

        if (res.status === 201) {
            const { message } = res.data;
            
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: {
                    message
                }
            });
        } else {
            dispatch({
                type: userConstants.USER_REGISTER_FAILURE,
                payload: {
                    error: res.data.error
                }
            })
        }
    } catch(err) {
        dispatch({
            type: userConstants.USER_REGISTER_FAILURE,
            payload: {
                error: err
            }
        })
    }

    
}