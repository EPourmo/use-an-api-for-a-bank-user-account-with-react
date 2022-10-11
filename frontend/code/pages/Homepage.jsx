import Header from "../src/components/Header";
import Banner from "../src/components/Banner";
import Features from "../src/components/Features";
import Footer from "../src/components/Footer";

export default function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <Banner />
      <Features />
      <Footer />
    </div>
  );
}
