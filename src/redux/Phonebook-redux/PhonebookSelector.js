import { createSelector } from "reselect";

const getItems = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;
const getContactForEdit = (state) => state.contacts.editedContact;
const getFilteredContacts = (state) => {
  const filter = getFilter(state);
  const items = getItems(state);
  if (!filter) {
    return items;
  }
  return items.filter((item) => item.name.includes(filter));
};

const getFilteredContactsMemo = createSelector(
  [getFilter, getItems],
  (filter, items) =>
    filter === ""
      ? items
      : items.filter((item) =>
          item.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
        )
);
export {
  getFilter,
  getItems,
  getFilteredContacts,
  getFilteredContactsMemo,
  getContactForEdit,
};
