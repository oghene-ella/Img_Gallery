import logo from "../../assets/logo/logo1.png";

// eslint-disable-next-line react/prop-types
const Searchbar = ({ onSearch }) => {
	return (
		<section className="w-11/12 flex items-center justify-between gap-10 mx-auto">
			<a href="/home">
				<img src={logo} className="w-14" />
			</a>
			<nav className="w-3/4">
				<input
					type="search"
					placeholder="Search for an image by creators :)"
					className="w-full h-full border border-blue-300 px-5 py-4 rounded-lg"
					onChange={(e) => onSearch(e.target.value)}
				/>
			</nav>
		</section>
	);
};

export default Searchbar;
