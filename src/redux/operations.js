import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64f9ff184098a7f2fc1543aa.mockapi.io';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
