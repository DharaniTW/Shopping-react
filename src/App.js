import React from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Navigation from "./Components/Navigation";
import Section from "./Components/Section/Section";
import Card from "./Components/Card/Card";
import ProductList from "./Components/ProductList/ProductList";
import Footer from "./Components/Footer/Footer";
const products = [
  {
    title: "Fancy Product",
    price: "$40.00 - $80.00",

    image: "https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg",
  },
  {
    title: "Special Item",
    price: "$20",

    image: "https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg",
  },
  {
    title: "Sale Item",
    price: "$40.00 - $80.00",
    image: "https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg",
  },
  {
    title: "Popular Item",
    price: "$40.00 - $80.00",
    image: "https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg",
  },
];
function App() {
  return (
    <>
      <Navigation />
      <Section />
      <ProductList data={products} />
      <ProductList data={products} />
      <Footer />
    </>
  );
}

export default App;
