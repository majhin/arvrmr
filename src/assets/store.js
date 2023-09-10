import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./reducers/buttonSlice";

const store = configureStore({
	reducer: {
		button: buttonReducer,
	},
});

export default store;
