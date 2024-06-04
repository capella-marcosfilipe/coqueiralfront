import { FaSearch } from "react-icons/fa";
import "../styles/searchbar.css"

export default function Searchbar() {
  return (
    <div className="search-container">
      <div className="search-content">
        <input
          type="text"
          id="search"
          placeholder="Pesquise o que você procura..."
        />
        <FaSearch className="searchIcon"/>
      </div>
    </div>
  );
}
