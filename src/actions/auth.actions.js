import { authConstant } from "./constants"
import axiosInstance from "../helpers/axios"

export const login = (user) => async (dispatch) => {
    dispatch({
        type: authConstant.LOGIN_REQUEST
    })
    
    const res = await axiosInstance.post('/signin', {
        ...user
    })

    if (res.status === 200) {
        const { token, user } = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({
            type: authConstant.LOGIN_SUCCESS,
            payload: {
                token, 
                user
            }
        });
    } else {
        if(res.status === 400) {
            dispatch({
                type: authConstant.LOGIN_FAILURE,
                payload: {
                    error: res.data.error
                }
            })
        }
    }
}

export const isUserLoggedIn = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
        const user = localStorage.getItem('user');
        dispatch({
            type: authConstant.LOGIN_SUCCESS,
            payload: {
                token,
                user
            }
        })
    } else {
        dispatch({
            type: authConstant.LOGIN_FAILURE,
            payload: {
                message: 'Failed to login'
            }
        })
    }
}

export const signout = () => async (dispatch) => {
    dispatch({ type: authConstant.LOGIN_REQUEST });
    const res = await axiosInstance.post('/signout');

    if (res.status === 200) {
        localStorage.clear();
        dispatch({ type: authConstant.LOGOUT_SUCCESS });
    } else {
        dispatch({
            type: authConstant.LOGOUT_FAILURE,
            payload: {
                error: res.data.error
            }
        });
    }
}