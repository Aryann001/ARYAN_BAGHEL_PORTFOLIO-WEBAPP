import axios from "axios";
import { server } from "../index";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "USERS_REQUEST" });

    const { data } = await axios.get(`${server}/users`, {
      withCredentials: true,
    });

    dispatch({ type: "USERS_SUCCESS", payload: data.users });
  } catch (error) {
    dispatch({ type: "USERS_FAIL", payload: error.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_USER_REQUEST" });

    const { data } = await axios.get(`${server}/admin/profile`, {
      withCredentials: true,
    });

    dispatch({ type: "LOAD_USER_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({ type: "LOAD_USER_FAIL", payload: error.response.data.message });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });

    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", payload: error.response.data.message });
  }
};

export const updateUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_USER_REQUEST" });

    const { data } = await axios.put(
      `${server}/admin/profile/update`,
      userData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch({ type: "UPDATE_USER_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({
      type: "UPDATE_USER_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });

    dispatch({ type: "LOGOUT_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({ type: "LOGOUT_FAIL", payload: error.response.data.message });
  }
};

export const updateAboutMe = (heading, description) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_ABOUT_ME_REQUEST" });

    const { data } = await axios.put(
      `${server}/admin/aboutme`,
      { heading, description },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "UPDATE_ABOUT_ME_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({
      type: "UPDATE_ABOUT_ME_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const updateStack = (stackData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_STACK_REQUEST" });

    const { data } = await axios.put(
      `${server}/admin/stack/update`,
      stackData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch({ type: "UPDATE_STACK_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({
      type: "UPDATE_STACK_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const createProject = (projectData) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_PROJECT_REQUEST" });

    const { data } = await axios.post(
      `${server}/admin/project/create`,
      projectData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch({ type: "CREATE_PROJECT_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({
      type: "CREATE_PROJECT_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const updateProject = (projectData, id) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PROJECT_REQUEST" });

    const { data } = await axios.put(
      `${server}/admin/project/update/${id}`,
      projectData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch({ type: "UPDATE_PROJECT_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({
      type: "UPDATE_PROJECT_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_PROJECT_REQUEST" });

    const { data } = await axios.delete(
      `${server}/admin/project/delete/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({ type: "DELETE_PROJECT_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({
      type: "DELETE_PROJECT_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
