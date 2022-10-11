import Header from "../components/Header";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div className="homepage">
      <Header isConnected={false} />
      <Banner />
      <Features />
      <Footer />
    </div>
  );
}
