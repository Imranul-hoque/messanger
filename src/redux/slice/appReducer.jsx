import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT",
  },
};

const slice = createSlice({
  name: "App",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebar(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

export default slice.reducer;

export function ToggleSidebar() {
  return async (dispatch) => {
    dispatch(slice.actions.toggleSidebar());
  };
}
