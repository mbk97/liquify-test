import About from "@/components/about/About";
import Companies from "@/components/companies/Companies";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Introduction from "@/components/introduction/Introduction";
import Investors from "@/components/investors/Investors";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <div>
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
