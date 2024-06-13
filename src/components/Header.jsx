import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section id="header" className="flex flex-row justify-center shadow-lg bg-white w-full">
      <nav className="w-full max-w-screen-lg py-4 mx-2 flex flex-row gap-4 items-center">
        Welcome to Anime Listing
        <Link to="/" className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-700 text-white">Home</Link>
        <Link to="/about-us" className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-700 text-white">About Us</Link>
      </nav>
    </section>
  )
}

export default Header;