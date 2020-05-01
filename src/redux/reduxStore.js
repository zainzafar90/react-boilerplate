import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";

const reduxStore = configureStore({
  auth,
});

export default reduxStore;
