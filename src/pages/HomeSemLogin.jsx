import NavbarSemLogin from "../components/NavbarSemLogin";
import Footer from "../components/Footer";
import ProdutosContainer from "../components/ProdutosContainer";
import "../styles/Home.css";
import Searchbar from "../components/Searchbar";

export default function HomeSemLogin() {
  return (
    <>
      <NavbarSemLogin />
      <Searchbar />
      <hr className="divider" />
      <ProdutosContainer title={"PRODUTOS EM ALTA"} />
      <Footer />
    </>
  );
}
