"use client";
import styles from "@/styles/header.module.css";
import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar expand="lg" className={`fixed-top d-flex ${scrolled ? styles.navbarScrolled : styles.navbar}`}>
        <Container className="justify-content-center">
          <Navbar.Brand href="/" className={styles.navbarBrand}>
            Jhon Doe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarToggler}>
            <span className={`navbar-toggler-icon ${styles.navbarTogglerIcon} ${scrolled ? styles.navbarScrolled : ''}`}></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarCollapse}>
            <Nav className="me-auto">
              <Nav.Link href="/" className={styles.navLink}>Home</Nav.Link>
              <Nav.Link href="/#about" className={styles.navLink}>About</Nav.Link>
              <Nav.Link href="/#services" className={styles.navLink}>Services</Nav.Link>
              <Nav.Link href="/#education" className={styles.navLink}>Education</Nav.Link>
              <Nav.Link href="/#work" className={styles.navLink}>Work</Nav.Link>
              <Nav.Link href="/#Client" className={styles.navLink}>Client</Nav.Link>
              <Nav.Link href="/#Blog" className={styles.navLink}>Blog</Nav.Link>
              <Nav.Link href="/#contact" className={styles.navLink}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
