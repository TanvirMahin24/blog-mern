import {
  GET_BLOGS,
  DELETE_BLOG,
  CREATE_BLOG,
  GET_SINGLE_BLOG,
  UPDATE_BLOG,
} from "../types/types";

const initialState = {
  blogs: [],
  selected_blog: {},
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_BLOGS:
      return {
        ...state,
        blogs: payload,
        loading: false,
      };
    case GET_SINGLE_BLOG:
      return {
        ...state,
        selected_blog: payload,
        blogs: [...state.blogs],
        loading: false,
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== payload),
        loading: false,
      };
    case CREATE_BLOG:
      return {
        ...state,
        blogs: [payload, ...state.blogs],
        loading: false,
      };
    case UPDATE_BLOG:
      return {
        ...state,
        blogs: [
          payload,
          ...state.blogs.filter((blog) => blog._id !== payload._id),
        ],
        loading: false,
      };
    default:
      return state;
  }
};
