import LoginAuth from "../authentication/LoginAuthentication"
import SearchBar from "../searchBar/Searchbar"
import Gallery from "./Gallery.jsx"

const Home = () => {
  return (
    <section className="border border-red-600 h-screen flex flex-col gap-5">
      <section className="border border-green-700 h-5/6 flex flex-col justify-center gap-14">
        <SearchBar />
        <Gallery />
      </section>
      <LoginAuth />
    </section>
  )
}

export default Home