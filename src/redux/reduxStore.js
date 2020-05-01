import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";

const reduxStore = configureStore({
  reducer: {
    auth,
  },
});

export default reduxStore;
