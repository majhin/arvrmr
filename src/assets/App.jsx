// src/App.js
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import PageA from "./components/PageA";
import PageB from "./components/PageB";

function App() {
	return (
		<Provider store={store}>
			<HashRouter basename='/'>
				<Routes>
					<Route path='/' Component={PageA} />
					<Route path='/pageB' Component={PageB} />
				</Routes>
			</HashRouter>
		</Provider>
	);
}

export default App;
