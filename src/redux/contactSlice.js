import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  fetchContactsThunk,
} from './operations';

const rejected = (state, action) => {
  [...state].isLoading = false;
  [...state].error = action.payload;
};

const pending = state => {
  state.isLoading = false;
  state.error = null;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(action => action.type.endsWith('/pending'), pending)
      .addMatcher(action => action.type.endsWith('/rejected'), rejected);
  },
});

export const contactsReducer = contactSlice.reducer;
