import "./App.css";
import Nav from "./Component/nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Component/signup/SignUp";
import Profile from "./Component/profile/Profile";

import Header from "./Component/header/Header";
import Login from "./Component/login/Login";
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AddProperty from "./Component/admin/addProperty/AddProperty";
import PropertyCard from "./Component/propertyCard/PropertyCard";
import ListProperty from "./Component/listProperty/ListProperty";
import DetailProperty from "./Component/detailProperty/DetailProperty";
import Home from "./Component/home/Home";
import Bienvenue from "./Component/bienvenue/Bienvenue";

function App() {
  const theme = extendTheme({
    colors: {
      brand: {
        100: "#042c54",

        // ...
        900: "#FF8A71",
      },
    },
  });
  return (
    <div className="App">
      <NextUIProvider>
        <ChakraProvider theme={theme}>
          <Router>
            <Nav />
            <Routes>
            <Route path="/updateProperty/:_id" element={<DetailProperty />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<Home />} />
              <Route path="/bienvenue" element={<Bienvenue />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/AddProperty" element={<AddProperty />} />
              {/* <Route path="/P" element={<PropertyCard />} /> */}
              <Route path="/ListPropertys" element={<ListProperty />} />
              <Route path="/detailcard/:_id" element={<DetailProperty />} />
            </Routes>
          </Router>
        </ChakraProvider>
      </NextUIProvider>
    </div>
  );
}

export default App;
