import LoginAuth from "../authentication/LoginAuthentication"
import SearchBar from "../searchBar/Searchbar"
import Gallery from "./Gallery.jsx"

const Home = () => {
  return (
		<section className="p-5">
			<main className="h-fit flex flex-col gap-7">
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