import axios from "axios";
import {
  GET_BLOGS,
  DELETE_BLOG,
  CREATE_BLOG,
  GET_SINGLE_BLOG,
  UPDATE_BLOG,
} from "../types/types";
import { BASE_URL } from "../api/api";

//GET blog action
export const getBlogs = () => async (dispatch) => {
  try {
    const res = await axios.get(BASE_URL);
    dispatch({
      type: GET_BLOGS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

//DELETE blog action
export const deleteBlog = (id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    dispatch({
      type: DELETE_BLOG,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

//CREATE blog
export const createBlog = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  try {
    const res = await axios.post(BASE_URL, formData, config);

    dispatch({
      type: CREATE_BLOG,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
//UPDATE blog
export const updateBlog = (id, formData) => async (dispatch) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  try {
    const res = await axios.put(`${BASE_URL}/${id}`, formData, config);

    dispatch({
      type: UPDATE_BLOG,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
//GET single blog action
export const getSingleBlog = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/${id}`);
    dispatch({
      type: GET_SINGLE_BLOG,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
