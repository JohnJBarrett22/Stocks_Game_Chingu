import axios from 'axios';
import { returnErrors } from './messages';

import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL } from './types';

//CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    //USER LOADING
    dispatch({ type: USER_LOADING });


    //GET TOKEN FROM STATE
    const token = getState().auth.token;

    //HEADERS
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //IF TOKEN ADD TO HEADERS CONFIG
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get('/api/auth/user', config)
    .then( res => {
        dispatch({
            type: USER_LOADED,
            payload: res.date
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        })
    });
}

//LOGIN USER
export const login = (username, password) => dispatch => {

    //HEADERS
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //REQUEST BODY
    const body = JSON.stringify({ username, password })

    axios.post('/api/auth/login', body, config)
    .then( res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.date
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: LOGIN_FAIL
        })
    });
}