import { createSlice } from "@reduxjs/toolkit";
import {
  editContact,
  addContact,
  removeContact,
  getContacts,
} from "./PhonebookOperations";
//  [editContact.pending]
//         [editContact.fulfilled]
//             [editContact.rejected]
export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
    editedContact: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
    editOnClick(state, { payload }) {
      return { ...state, editedContact: payload };
    },
  },
  extraReducers: {
    [addContact.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [addContact.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      items: [...state.items, payload],
    }),
    [addContact.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    [removeContact.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [removeContact.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: null,
      items: state.items.filter(({ id }) => id !== payload),
    }),
    [removeContact.rejected]: (state) => ({
      ...state,
      isLoading: false,
      error: null,
    }),
    [getContacts.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [getContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: null,
      items: [...payload],
    }),
    [getContacts.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    [editContact.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [editContact.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: null,
      editedContact: null,
      items: state.items.map((item) =>
        item.id !== payload.id ? item : payload
      ),
    }),
    [editContact.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
});

// export const { openEditedTodo } = contactsSlice.actions;
export default contactsSlice.reducer;
export const { changeFilter, editOnClick } = contactsSlice.actions;
