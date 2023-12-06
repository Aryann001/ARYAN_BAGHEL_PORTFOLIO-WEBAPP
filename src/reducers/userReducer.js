import { createReducer } from "@reduxjs/toolkit";

export const usersReducer = createReducer(
  { users: [] },
  {
    USERS_REQUEST: (state, action) => {
      state.loading = true;
    },
    USERS_SUCCESS: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    USERS_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  }
);

export const userReducer = createReducer(
  { user: {} },
  {
    LOAD_USER_REQUEST: (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    LOAD_USER_SUCCESS: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    LOAD_USER_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    
    UPDATE_USER_REQUEST: (state, action) => {
      state.updateLoading = true;
    },
    UPDATE_USER_SUCCESS: (state, action) => {
      state.updateLoading = false;
      state.user = action.payload;
      state.isUpdated = true
    },
    UPDATE_USER_RESET: (state, action) => {
      state.isUpdated = false;
    },
    UPDATE_USER_FAIL: (state, action) => {
      state.updateLoading = false;
      state.error = action.payload;
    },

    UPDATE_ABOUT_ME_REQUEST: (state, action) => {
      state.updateAmLoading = true;
    },
    UPDATE_ABOUT_ME_SUCCESS: (state, action) => {
      state.updateAmLoading = false;
      state.user = action.payload;
      state.isUpdatedAm = true
    },
    UPDATE_ABOUT_ME_RESET: (state, action) => {
      state.isUpdatedAm = false;
    },
    UPDATE_ABOUT_ME_FAIL: (state, action) => {
      state.updateAmLoading = false;
      state.error = action.payload;
    },

    UPDATE_STACK_REQUEST: (state, action) => {
      state.updateStackLoading = true;
    },
    UPDATE_STACK_SUCCESS: (state, action) => {
      state.updateStackLoading = false;
      state.user = action.payload;
      state.isStackUpdated = true
    },
    UPDATE_STACK_RESET: (state, action) => {
      state.isStackUpdated = false;
    },
    UPDATE_STACK_FAIL: (state, action) => {
      state.updateStackLoading = false;
      state.error = action.payload;
    },

    CREATE_PROJECT_REQUEST: (state, action) => {
      state.createProjectLoading = true;
    },
    CREATE_PROJECT_SUCCESS: (state, action) => {
      state.createProjectLoading = false;
      state.user = action.payload;
      state.isProjectCreated = true
    },
    CREATE_PROJECT_RESET: (state, action) => {
      state.isProjectCreated = false;
    },
    CREATE_PROJECT_FAIL: (state, action) => {
      state.createProjectLoading = false;
      state.error = action.payload;
    },

    UPDATE_PROJECT_REQUEST: (state, action) => {
      state.updateProjectLoading = true;
    },
    UPDATE_PROJECT_SUCCESS: (state, action) => {
      state.updateProjectLoading = false;
      state.user = action.payload;
      state.isProjectUpdated = true
    },
    UPDATE_PROJECT_RESET: (state, action) => {
      state.isProjectUpdated = false;
    },
    UPDATE_PROJECT_FAIL: (state, action) => {
      state.updateProjectLoading = false;
      state.error = action.payload;
    },

    DELETE_PROJECT_REQUEST: (state, action) => {
      state.deleteProjectLoading = true;
    },
    DELETE_PROJECT_SUCCESS: (state, action) => {
      state.deleteProjectLoading = false;
      state.user = action.payload;
      state.isProjectDeleted = true
    },
    DELETE_PROJECT_RESET: (state, action) => {
      state.isProjectDeleted = false;
    },
    DELETE_PROJECT_FAIL: (state, action) => {
      state.deleteProjectLoading = false;
      state.error = action.payload;
    },

    LOGIN_REQUEST: (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    LOGIN_SUCCESS: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    LOGIN_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    LOGOUT_SUCCESS: (state, action) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
    },
    LOGOUT_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  }
);
