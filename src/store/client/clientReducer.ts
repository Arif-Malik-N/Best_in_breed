import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeClients: [],
  contractClients: [],
  clientsWithContract: {
    pagination: { searchName: "", page: 0, perPage: 0, totalPages: 0 },
    result: [],
  },
  clients: {
    pagination: { searchName: "", page: 0, perPage: 0, totalPages: 0 },
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
    saveClientsWithContract: (state, { payload }) => {
      state.clientsWithContract = payload;
    },
    resetUserState: () => initialState,
  },
});

export const { saveClients, resetUserState, saveClientsWithContract } =
  clientSlices.actions;

export default clientSlices.reducer;
