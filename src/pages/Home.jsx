import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProdutosContainer from "../components/ProdutosContainer";
import "../styles/index.css";
import Searchbar from "../components/Searchbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <hr className="divider" />
      <ProdutosContainer title={"Produtos em alta"} />
      <Footer />
    </>
  );
}
