import Footer from "../components/Footer";
import Navbar from "../components/NavbarSemLogin";
import About from "../components/AboutSemLogin";

export default function SobreSemLogin() {
  return (
    <>
      <Navbar />
      <hr className="divider" />
      <About />
      <Footer />
    </>
  );
}
