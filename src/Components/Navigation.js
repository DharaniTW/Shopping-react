import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navigation.css";
function Navigation() {
  return (
    <div className="App">
      <Navbar
        bg="light"
        variant="light"
        stick="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand> Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle className="coloring" />

        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
            <NavDropdown title="Shop">
              <NavDropdown.Item href="#shop/allproduct">
                All Products
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Popular Items</NavDropdown.Item>
              <NavDropdown.Item href="">New Arrivals</NavDropdown.Item>
            </NavDropdown>
            <button className="button">
              <i class="fas fa-shopping-cart"></i>Cart
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
