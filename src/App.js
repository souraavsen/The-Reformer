import "./App.css";
import DetailsSection from "./Pages/DetailsSection/DetailsSection";
import Header from "./Pages/Header/Header";
import ManagingDetails from "./Pages/ManagingDetails/ManagingDetails";
import NavbarSection from "./Pages/Navbar/NavbarSection";
import ShoppingSection from "./Pages/ShoppingSection/ShoppingSection";

function App() {
  return (
    <div>
      <NavbarSection></NavbarSection>
      <Header></Header>
      <DetailsSection></DetailsSection>
      <ManagingDetails></ManagingDetails>
      <ShoppingSection></ShoppingSection>
    </div>
  );
}

export default App;
