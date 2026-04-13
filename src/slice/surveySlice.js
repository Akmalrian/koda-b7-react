import { createSlice } from '@reduxjs/toolkit';

const surveySlice = createSlice({
  name: 'survey',
  initialState: {
    list: []
  },
  reducers: {
    // Action untuk menambah data survey
    addSurvey: (state, action) => {
      state.list.push(action.payload);
    },
    // Action untuk mengurangi/menghapus data survey
    removeSurvey: (state, action) => {
      state.list = state.list.filter((_, index) => index !== action.payload);
    }
  }
});

export const { addSurvey, removeSurvey } = surveySlice.actions;
export default surveySlice.reducer;