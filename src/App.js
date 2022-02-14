/** @format */
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RenderImgPage from "./components/RenderImgPage";
import { createStore } from "redux";
import pageReducer from "./reducers/pageReducer";
import { Provider } from "react-redux";

const pageStore = createStore(pageReducer);
const App = () => {
	// console.log("page: ", pageStore.getState());
	// pageStore.dispatch({ type: "ADD_PAGE" });
	// console.log("page: ", pageStore.getState());

	return (
		<Provider store={pageStore}>
			<Router>
				<Navbar />
				<Routes>
					{/* <Route path={data["title"]} element={<RenderImgPage />}></Route> */}
					<Route path='/movie/:id' element={<RenderImgPage />}></Route>
					<Route path='/' element={<Home />}></Route>
				</Routes>
			</Router>
		</Provider>
	);
};

export default App;
