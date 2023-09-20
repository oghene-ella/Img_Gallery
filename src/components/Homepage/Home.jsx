import LoginAuth from "../authentication/LoginAuthentication"
import SearchBar from "../searchBar/Searchbar"
import Gallery from "./Gallery.jsx"

const Home = () => {
  return (
		<section className="p-5 bg-blue-100 bg-opacity-40">
			<main className="h-fit flex flex-col gap-12">
				<section className="h-4/5 flex flex-col justify-center gap-14">
					<SearchBar />
					<Gallery />
				</section>
				<LoginAuth />
			</main>
		</section>
	);
}

export default Home