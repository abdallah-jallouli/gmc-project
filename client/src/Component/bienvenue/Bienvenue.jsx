import React from "react";
import logo from "../../images/logo.png";
import "./bienvenue.css";
import { useSelector } from "react-redux";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Bienvenue = () => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <div className="bienvenue-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="bienvenue-card">
        <p>{`Bienvenue ${user.fname}`} </p>
        <hr />
        <div className="bienvenue-button-container">
          <Link to="/profile"><button className="bienvenue-button">Voir Profil <span><FaArrowCircleRight/></span></button></Link>
          <Link to="/AddProperty"><button className="bienvenue-button">Créer Annonce <span><FaArrowCircleRight/></span></button></Link>
          <Link to='/ListPropertys'><button className="bienvenue-button">Voir Tous les Annonces <span><FaArrowCircleRight/></span></button></Link>
        </div>
      </div>
    </div>
  );
};

export default Bienvenue;
