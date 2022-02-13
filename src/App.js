/** @format */
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</Router>
	);
};

export default App;
