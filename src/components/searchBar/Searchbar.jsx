import logo from "../../assets/logo/logo1.png"

const Searchbar = () => {
  return (
    <section className="w-11/12 flex items-center justify-between gap-10 mx-auto">
        <img src={logo} className="w-14"/>
        <nav className="w-3/4">
            <input type="search" placeholder="Search for an image :)" 
            
            className="w-full h-full border border-blue-300 px-5 py-4 rounded-lg"/>
        </nav>
    </section>
  )
}

export default Searchbar