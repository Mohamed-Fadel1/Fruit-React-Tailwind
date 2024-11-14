import About from "../About/About"; 
import Banner from "../Banner/Banner"; 
import Footer from "../Footer/Footer"; 
import Hero from "../Hero/Hero";
import Menu from "../Menu/Menu"; 
import Shop from "../Shop/Shop";

const Fruit = () => {
  return (
    <main className="overflow-x-hidden overflow-y-hidden">
      <Hero />
      <Menu />
      <About />
      <Shop />
      <Banner />
      <Footer />
    </main>
  );
};

export default Fruit;
