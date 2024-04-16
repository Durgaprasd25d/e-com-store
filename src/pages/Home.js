import React from "react";
import Navbar from "../features/navbar/Navbar.js";
import ProductList from "../features/Product List/ProductList.js";

function Home() {
  return (
    <>
      <Navbar>
        <ProductList /> 
      </Navbar>
    </>
  );
}

export default Home;
