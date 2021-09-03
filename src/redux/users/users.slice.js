import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, searchUser, createUser, deleteUser } from './users.thunk';

const initialState = {
  loading: false,
  error: null,
  usersLoading: false,
  users: [],
  searchResult: [],
  usersResult: [],
  pendingUpdate: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearSearch: (state) => {
      // Se limpia la búsqueda y se muestra la lista de usuarios.
      state.searchResult = [];
      state.users = state.usersResult;
    },
    clearPendingUpdate: (state) => {
      state.pendingUpdate = false;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.usersLoading = true;
      state.error = null;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      // Se actualiza el resultado y los usuarios a mostrar.
      state.usersResult = action.payload;
      state.users = state.usersResult;
      state.usersLoading = false;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.error = action.error.message;
      state.usersLoading = false;
    },
    [searchUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [searchUser.fulfilled]: (state, action) => {
      // Se actualiza el resultado de la búsqueda y los usuarios a mostrar.
      state.searchResult = action.payload;
      state.users = state.searchResult;
      state.loading = false;
    },
    [searchUser.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [createUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [createUser.fulfilled]: (state, action) => {
      state.pendingUpdate = true;
      state.loading = false;
    },
    [createUser.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [deleteUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.pendingUpdate = true;
      state.loading = false;
    },
    [deleteUser.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export const { clearSearch, clearPendingUpdate } = usersSlice.actions;

export default usersSlice.reducer;
