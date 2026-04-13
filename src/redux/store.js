import { configureStore } from "@reduxjs/toolkit";

import surveyReducer from "./slices/survey"

const store = configureStore({
  reducer: {
    survey: surveyReducer
  },
})

export default store