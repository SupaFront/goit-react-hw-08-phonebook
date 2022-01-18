import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addContactApi,
  removeContactApi,
  editContactApi,
  getContactsApi,
} from "../../fetchContactsAPI/fetchContactsAPI";

export const addContact = createAsyncThunk(
  "addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const respContact = await addContactApi(contact);
      return respContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getContacts = createAsyncThunk(
  "getContacts",
  async (_, { rejectWithValue }) => {
    try {
      const respContacts = await getContactsApi();
      return respContacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  "removeContact",
  async (id, { rejectWithValue }) => {
    try {
      const respId = await removeContactApi(id);
      return respId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editContact = createAsyncThunk(
  "editContact",
  async ({ name, number, id }, { rejectWithValue }) => {
    try {
      const contactForEdit = await editContactApi({ name, number, id });
      return { ...contactForEdit, id };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
