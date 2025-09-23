import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeClients: [],
  contractClients: [],
  clients: {
    pagination: [],
    result: [],
  },
};

const clientSlices = createSlice({
  name: "client",
  initialState,
  reducers: {
    saveClients: (state, { payload }) => {
      state.clients = payload;
    },
    resetUserState: () => initialState,
  },
});

export const { saveClients, resetUserState } = clientSlices.actions;

export default clientSlices.reducer;
