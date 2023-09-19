import { useState } from "react"
import { auth } from "../../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import img_logo from "../../../assets/logo/logo1.png"
import login_bg from "../../../assets/login_bg.webp";


const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();


	const logIn = (e) => {
		e.preventDefault();

		if (!username || !password) {
			setErrorMessage("Please enter both username and password.");
			return;
		}
		
		signInWithEmailAndPassword(auth, username, password)
			.then((userInfo) => {
				console.log(userInfo)
				navigate("/home");
			})
			.catch((error) => {
				console.log(error)
				navigate("/");
				setErrorMessage("Oops! Wrong Details! Try Again!");
			})
	}

	return (
		<section className="w-screen h-screen flex gap-5 font-mooli_sans justify-center">
			<section className="sm:w-5/6 lg:w-1/2 flex flex-col items-center p-5 justify-center gap-10">
				{/* header and logo */}
				<span className="w-11/12 flex flex-col gap-5">
					<img src={img_logo} className="w-1/6 sm:w-1/12" />
					<span className="flex flex-col gap-2">
						<h1 className="text-3xl sm:text-5xl">Welcome Back!</h1>
						<p className="sm:text-lg text-gray-500 md:w-2/3 ">
							Explore and create your gallery to building a safe and inspiring
							space for all our users.
						</p>
					</span>
				</span>

				{/* the form */}
				<form className="w-11/12 flex flex-col gap-10" onSubmit={logIn}>
					{/* email/username input */}
					<span className="flex flex-col gap-2">
						<label className="text-gray-800">User Name</label>
						<input
							type="text"
							placeholder="Enter your Email address (your email is your username)"
							className="border border-gray-200 px-5 py-3 rounded-lg text-black"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</span>

					{/* password input */}
					<span className="flex flex-col gap-2">
						<label className="text-gray-800">Password</label>
						<input
							type="password"
							placeholder="Enter your Password"
							className="border border-gray-200 px-5 py-3 rounded-lg text-black"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</span>

					{/* terms and conditions */}
					<p className="text-base text-gray-500">
						By clicking <b className="text-blue-700 font-bold text-lg">Login</b>
						, we assume you accept these terms and conditions
					</p>

					{/* login button */}
					<input
						type="submit"
						value="Login"
						className="bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-600 text-lg"
					/>

					<p className="text-red-500 font-semibold">{errorMessage}</p>
				</form>
			</section>
			<img src={login_bg} className="hidden lg:block lg:w-1/2 bg-cover" />
		</section>
	);
};

export default Login;
