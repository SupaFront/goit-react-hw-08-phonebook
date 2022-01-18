import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const path = {
  CONTACTS: "/contacts",
};

export const addContactApi = async (contact) => {
  try {
    const { data } = await axios.post(path.CONTACTS, contact);

    return data;
  } catch (err) {
    throw err.message;
  }
};

export const getContactsApi = async () => {
  try {
    const { data } = await axios.get(path.CONTACTS);

    return data;
  } catch (err) {
    throw err.message;
  }
};

export const removeContactApi = async (id) => {
  try {
    await axios.delete(path.CONTACTS + "/" + id);

    return id;
  } catch (err) {
    throw err.message;
  }
};

export const editContactApi = async (props) => {
  const { id } = props;
  try {
    const { data } = await axios.put(path.CONTACTS + "/" + id, props);
    return data;
  } catch (err) {
    throw err.message;
  }
};
