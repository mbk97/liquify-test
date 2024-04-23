import About from "@/components/about/About";
import Companies from "@/components/companies/Companies";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Introduction from "@/components/introduction/Introduction";
import Investors from "@/components/investors/Investors";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Introduction />
      <Companies />
      <Services />
      <Investors />
      <Footer />
    </div>
  );
}
