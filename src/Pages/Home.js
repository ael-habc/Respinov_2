import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Product from "../Card";
import productList from "../ft_product.json";
import "./Home.css";
import logo from "../images/logo.svg";
import Caroussel from "../Caroussel";
import Cookies from "js-cookie";

export default function Home() {
  const history = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!Cookies.get("login")) {
      history("/login");
    }
  });
  return (
    <div className="container">
      <Caroussel />

      <div className="content">
        <h1>RESPINNOV</h1>
        <h3>
          Un souffle d'excellence technologique pour une expérience de
          respirateur d'anesthésie repensée
        </h3>
      </div>
      <hr />
      <div className="main">
        <div className="main_left">
          <p>
            Bienvenue dans l&#39;univers de RespInnov, une plateforme numérique
            révolutionnaire dédiée à l&#39;excellence de la gestion des
            respirateurs d&#39;anesthésie de la multinationale chinoise Mindray.
            RespInnov est bien plus qu&#39;un simple système informatisé ;
            c&#39;est un écosystème complet conçu pour optimiser la performance,
            la sécurité et l&#39;efficacité des respirateurs d’anesthésie vitaux
            utilisés par les professionnels de santé au Maroc.
          </p>
        </div>
        <div className="main_right">
          <p>
            RespInnov est donc l&#39;aboutissement d&#39;une synergie sans
            précédent entre technologie de pointe, expertise médicale et
            engagement envers l&#39;amélioration continue. Elle est bien plus
            qu&#39;une simple plateforme numérique : c&#39;est un partenaire
            fiable pour les professionnels de santé, offrant des solutions
            novatrices pour améliorer la gestion, la maintenance et la sécurité
            des respirateurs d&#39;anesthésie de Mindray. Nous sommes déterminés
            à repousser les limites de l&#39;innovation et à contribuer à un
            environnement médical plus sûr et plus performant. Rejoignez-nous !
          </p>
        </div>
      </div>
      <div className="featured_product">
        <h1>Produits Populaires</h1>
        <p>Découvrez les produits les plus populaires</p>
        <div className="featured_product_list">
          {productList.products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="footer">
        <img src={logo} alt="logo" />
        <div className="footer_menu">
          <h1>Menu</h1>
          <NavLink to="/product" className="footer_menu_item">
            Pièce de rechange
          </NavLink>
          <NavLink to="/about" className="footer_menu_item">
            A propos
          </NavLink>
          <NavLink to="/reclamation" className="footer_menu_item">
            Réclamation
          </NavLink>
          <NavLink to="/formulaire" className="footer_menu_item">
            Formulaire
          </NavLink>
        </div>
        <div className="footer_menu">
          <h1>Social Media</h1>
          <NavLink to="/" className="footer_menu_item">
            instagram
          </NavLink>
          <NavLink to="/" className="footer_menu_item">
            facebook
          </NavLink>
          <NavLink to="/" className="footer_menu_item">
            linkdin
          </NavLink>
        </div>
      </div>
    </div>
  );
}
