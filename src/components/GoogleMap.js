import React from "react";
import styled from "styled-components";

const GoogleMap = ()=>{
    return(
        <Map>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17044.90745620693!2d23.36147589706634!3d42.59848387506435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDM1JzUwLjEiTiAyM8KwMjEnMTguMyJF!5e1!3m2!1sen!2sbg!4v1614612436102!5m2!1sen!2sbg" title="GoogleMap" allowFullScreen="" loading="lazy"></iframe>
        </Map>
    )
}

const Map = styled.div`
iframe{
    border: none;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 60vh;
    object-fit: cover;
}`;

export default GoogleMap;

// width="800" height="600" style="border:0;