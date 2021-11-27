import { useState } from "react";
import "./App.css";
import DetailsSection from "./Pages/DetailsSection/DetailsSection";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import ManagingDetails from "./Pages/ManagingDetails/ManagingDetails";
import NavbarSection from "./Pages/Navbar/NavbarSection";
import ShoppingSection from "./Pages/ShoppingSection/ShoppingSection";

function App() {

  const [animateClass, setAnimateClass] = useState(
    "motion-bg uppercase px-2.5 py-0.5"
  );

  return (
    <div>
      <NavbarSection></NavbarSection>
      <Header setAnimateClass={setAnimateClass}></Header>
      <DetailsSection
        animateClass={animateClass}
        setAnimateClass={setAnimateClass}
      ></DetailsSection>
      <ManagingDetails setAnimateClass={setAnimateClass}></ManagingDetails>
      <ShoppingSection setAnimateClass={setAnimateClass}></ShoppingSection>
      <Footer setAnimateClass={setAnimateClass}></Footer>
    </div>
  );
}

export default App;
