import { Routes, Route} from "react-router-dom";

import Login from "./pages/Login.jsx";
import Home from "./pages/Homepage.jsx"
import NotFound from "./pages/NotFound.jsx"


const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/home" index element={<Home />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
