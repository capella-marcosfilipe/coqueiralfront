export default function Searchbar() {
  return (
    <div className="search-container">
      <div className="search-content">
        <input
          type="text"
          id="search"
          placeholder="Pesquise o que você procura..."
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
