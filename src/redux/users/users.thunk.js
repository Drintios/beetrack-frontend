import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = process.env.REACT_APP_API_URL;

// Para los errores que no hacen throw con fetch (Status 404, 500...).
const handleStatusError = (response) => {
  const message = `An error has occured: ${response.status}`;
  throw Error(message);
};

/*
 * limit: Cantidad de usuarios a devolver en el request.
 * pagina: Pagina actual a devolver.
 */
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

// query: Texto a buscar.
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

// data: Datos de usuario a guardar.
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

// userId: id del usuario a eliminar.
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
