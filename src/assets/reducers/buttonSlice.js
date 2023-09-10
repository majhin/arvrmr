import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
	name: "button",
	initialState: {
		isClicked: false,
	},
	reducers: {
		clickButton: (state) => {
			state.isClicked = true;
		},
	},
});

export const { clickButton } = buttonSlice.actions;
export default buttonSlice.reducer;
