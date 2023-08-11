import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contacto</h2>
          <p>Correo electrónico: contacto@example.com</p>
          <p>Teléfono: +123456789</p>
        </div>
        <div className="footer-section">
          <h2>Enlaces útiles</h2>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/about">Acerca de nosotros</a>
            </li>
            <li>
              <a href="/services">Servicios</a>
            </li>
            <li>
              <a href="/contact">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Síguenos en redes sociales</h2>
          <div className="social-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Nombre de la Compañía. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
