import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
import Clothes1 from "../components/Clothes1"

export default function Roupa1() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <hr className="divider" />
      <Clothes1 />
      <Footer />
    </>
  );
}
