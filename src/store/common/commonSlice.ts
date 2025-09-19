import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    isLoading: false as boolean,
    isMainLoading: false as boolean,
    isScreenLoading: false as boolean,
    showModal: false as boolean,
    restaurantID: null as any,
    staffID: null as any,
    restaurantBranchID: null as any,
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setMainLoading: (state, { payload }) => {
      state.isMainLoading = payload;
    },
    setScreenLoading: (state, { payload }) => {
      state.isScreenLoading = payload;
    },
    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },
    saveRestaurantIDGlobal: (state, { payload }) => {
      state.restaurantID = payload;
    },
    saveRestaurantBranchIDGlobal: (state, { payload }) => {
      state.restaurantBranchID = payload;
    },
    showMessage: (_, { payload }) => {
      toast(payload);
    },
    saveStaffId: (state, { payload }) => {
      state.staffID = payload;
    },
  },
});

export const {
  setLoading,
  setMainLoading,
  showMessage,
  setShowModal,
  setScreenLoading,
  saveRestaurantIDGlobal,
  saveStaffId,
  saveRestaurantBranchIDGlobal
} = commonSlice.actions;

export default commonSlice.reducer;
