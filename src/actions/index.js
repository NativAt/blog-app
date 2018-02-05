import axios from 'axios';
import { FETCH_POSTS, FETCH_POST, CREATE_POST, DELETE_POST } from './types';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=123';

export function fetchPosts() {
  return async function(dispatch) {
    let request;
    try {
      request = await axios.get(`${ROOT_URL}/posts${API_KEY}`);
    } catch(err) {
      request = { err };
    }
    
    dispatch({
      type: FETCH_POSTS,
      payload: request
    });
  }
}

export function fetchPost(postId) {
  return async function(dispatch) {
    let request;
    try {
      request = await axios.get(`${ROOT_URL}/posts/${postId}${API_KEY}`);
    } catch(err) {
      request = { err };
    }
    
    dispatch({
      type: FETCH_POST,
      payload: request
    });
  }
}

export function createPost(values) {
  return async function(dispatch) {
    let request;
    try {
      request = await axios.post(`${ROOT_URL}/posts${API_KEY}`, { values })
    } catch(err) {
      request = { err };
    }
    dispatch({
      type: CREATE_POST,
      payload: request
    })    
  }
}

export function deletePost(postId) {
  return function(dispatch) {
      
    return axios.delete(`${ROOT_URL}/posts/${postId}${API_KEY}`);
   
    dispatch({
      type: DELETE_POST,
      payload: request
    })    
  }
}