import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false,
};


const sidebarSlice = createSlice({
    name: "sidbar",
    initialState,
    reducers: {
        openSidebar: (state) => {
            state.isSidebarOpen = true;
        },
        closeSidebar: (state) => {
            state.isSidebarOpen = false;
        },
    },
    extraReducers() { },
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;
export const selectIssidebarOpen = (state) => state.sidebar.isSidebarOpen;
export default sidebarSlice.reducer;