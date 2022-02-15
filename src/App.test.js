/** @format */

// /** @format */

// import App from "./App";
// import TestRenderer from "react-test-renderer";
// import { Provider } from "react-redux";
// import "@testing-library/jest-dom/extend-expect";
// import pageReducer from "./reducers/pageReducer";
// import { createStore } from "redux";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import MovieCard from "./components/MovieCard";

// const pageStore = createStore(pageReducer);
// test("renders ", () => {
// 	const testRenderer = TestRenderer.create(<App />);
// 	const testInstance = testRenderer.root;
// 	console.log("JSON: ", testRenderer.toTree());
// 	const list = testInstance.findAllByType(MovieCard);

// 	expect(list.length).toBe(20);
// });
/** @format */
import App from "./App";
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
// import { render, screen } from "@testing-library/react";
test("renders ", () => {
	const testRenderer = TestRenderer.create(<App />);
	console.log(testRenderer.toTree());
});
