import axios from 'axios';
import { FETCH_POSTS } from './types';
import { FETCH_POST } from './types';

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
  console.log('@@@', values);
}