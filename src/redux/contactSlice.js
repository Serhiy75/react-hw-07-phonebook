import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContact } from './operations';

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const pending = state => {
  state.isLoading = false;
  state.error = null;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
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
