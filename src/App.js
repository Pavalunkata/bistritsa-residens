import React, {useState} from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import data from "./viz";

// Importing componnetns
import Nav from "./components/Nav";
import Prev from "./components/Prev";
import Advantages from "./components/Advantages";
import GoogleMap from "./components/GoogleMap";
import Galery from "./components/Galery";
import AboutArea from "./components/AboutArea";
import ContactUs from "./components/ContactForm";
import ImageMap from "./components/ImageMap";

function App() {

  //Adding State
  const [pictures, setPictures] = useState(data());

  return (
    

    <BistritsaResidentsStyled>
      <GlobalStyle />

      <Nav />
      <Prev />
      <Advantages />
      <ImageMap />
      <Galery pictures={pictures}/>
      <AboutArea />
      <GoogleMap />
      <ContactUs />
    </BistritsaResidentsStyled>
    
  );
}


const BistritsaResidentsStyled = styled.div``;
export default App;
