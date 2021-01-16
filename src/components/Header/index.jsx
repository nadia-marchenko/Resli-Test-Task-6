import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './index.scss';

const Header = () => {
  return (
    <header className="content-wrapper">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Hotnow</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/employees">Сотрудники</Nav.Link>
            <Nav.Link href="/#about-us">О нас</Nav.Link>
            <Nav.Link href="/#contacts">Контакты</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;