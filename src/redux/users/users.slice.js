import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Para los errores que no hacen throw con fetch (Status 404, 500...).
const handleStatusError = (response) => {
  const message = `An error has occured: ${response.status}`;
  throw Error(message);
};

const API_URL = process.env.REACT_APP_API_URL;

const initialState = {
  loading: false,
  error: null,
  users: [],
  searchResult: [],
  usersResult: [],
  pendingUpdate: false,
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({ limit = 8, page = 1 }) => {
    try {
      const response = await fetch(
        `${API_URL}/api/users?_page=${page}&_limit=${limit}`
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        handleStatusError(response);
      }
    } catch (error) {
      throw Error(error);
    }
  }
);

export const searchUser = createAsyncThunk(
  'users/searchUser',
  async (query) => {
    try {
      const response = await fetch(`${API_URL}/api/users?q=${query}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        handleStatusError(response);
      }
    } catch (error) {
      throw Error(error);
    }
  }
);

export const createUser = createAsyncThunk('users/createUser', async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      handleStatusError(response);
    }
  } catch (error) {
    throw Error(error);
  }
});

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userId) => {
    try {
      const response = await fetch(`${API_URL}/api/users/${userId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        handleStatusError(response);
      }
    } catch (error) {
      throw Error(error);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.searchResult = [];
      state.users = state.usersResult;
    },
    clearPendingUpdate: (state) => {
      state.pendingUpdate = false;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.usersResult = action.payload;
      state.users = state.usersResult;
      state.loading = false;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [searchUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [searchUser.fulfilled]: (state, action) => {
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
