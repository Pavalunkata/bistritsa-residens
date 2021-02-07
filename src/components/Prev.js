import React from "react";
import styled from "styled-components";

//Importing midia
import video1 from "../img/Video1.mp4"

const Prev = () =>{
    return(
        <div className="div">
            <StyledVideoBaner>
                <video src={video1} type="video/mp4" controls autoPlay/>
            </StyledVideoBaner>

        </div>
    )
}

const StyledVideoBaner = styled.div`
    margin: 0;
    padding: 0;
    video{
        border: none;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100vh;
        object-fit: cover;
        };
`;

export default Prev;