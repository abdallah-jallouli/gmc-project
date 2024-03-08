import React, { useEffect } from "react";
import { MdFolderCopy } from "react-icons/md";
import { HiMiniBellAlert } from "react-icons/hi2";
import { GrTransaction } from "react-icons/gr";
import { BsPersonCircle } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { HiLogout } from "react-icons/hi";
import { BsPersonSquare } from "react-icons/bs";

import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {getUserPropertys } from "../../redux/actions/actionProperty";
import PropertyModifyCard from "../propertyCard/PropertModifyCard"
import Footer from "../home/footer/Footer";
import { Link } from "react-router-dom";
import { Button, useTheme } from "@chakra-ui/react";
import { FaPlusCircle } from "react-icons/fa";
import { userLogout } from "../../redux/actions/actionUser";

const Profile = () => {
  const { propertys } = useSelector((state) => state.propertyReducer);
  const { user } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
    const dispatch = useDispatch();

  const handleLogOut = (e)=>{
    e.preventDefault()
    dispatch(userLogout());
    navigate('/login');
  }

  
  useEffect(() => {
    dispatch(getUserPropertys(user.id));
  }, [dispatch]);

  const theme = useTheme();

  return (
    <div>
      <div className="profile__search-bar">
        <input type="text" placeholder="Search..." />
        <Link to="/AddProperty">
          <Button
            color={theme.colors.brand["100"]}
            variant="outline"
            fontSize="xl"
            size="lg"
          >
            <FaPlusCircle />
            <span>Publier une annonce</span>
          </Button>
        </Link>
      </div>
      <div className="profile-container">
        <div className="user-info" style={{ width: "20%" }}>
          <div className="user-description">
            <BsPersonSquare className="user-image" />
            <p>{user.fname}</p>
          </div>
          <div className="profile__user-featrues">
            <button>
              <MdFolderCopy /> <span>Mes annonces</span>
            </button>
            <button>
              <HiMiniBellAlert />
              <span>Mes alertes</span>
            </button>
            <button>
              <GrTransaction />
              <span>Mes transactions</span>
            </button>
            <button>
              <BsPersonCircle />
              <span>Mes informations</span>
            </button>
            <button>
              <MdSecurity />
              <span>Sécurité</span>
            </button>
            <button onClick={handleLogOut}>
              <HiLogout />
              <span>déconnecter</span>
            </button>
          </div>
        </div>
        <div className="announcements" style={{ width: "80%" }}>
          {/* Announcements component */}
          <h2>Mes Annonces</h2>
          <div className="list">
            {propertys.map((el) => (
              <PropertyModifyCard key={el.id} property={el} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
