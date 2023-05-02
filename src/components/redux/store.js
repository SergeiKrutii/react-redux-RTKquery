import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contacts/contacts-createApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch);
