import { Routes, Route} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Homepage"
import NotFound from "./pages/Notfound"
import Authentication from "./components/authentication/LoginAuthentication"


const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/" element={<Authentication />}>
				<Route path="/home" index element={<Home />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
