import React from "react";
import styled from "styled-components";


//Importing midia
import viz_0 from "../media/viz_0.JPG"

const Prev = () =>{
    return(
        <div>
            <StyledImageBackgraound>
                <img src={viz_0} alt="backgraound vue of area" />
            </StyledImageBackgraound>
            <StyledWellcomeText>
                <h1>Bisritsa Residence</h1>
                <h2>Спокойствието на 5 мин от града</h2>
            </StyledWellcomeText>
        </div>
    )
}

const StyledImageBackgraound = styled.div`
    margin: 0;
    padding: 0;
    overflow: 0;
    
    img{
        border: none;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 93vh;
        object-fit: cover;
        filter: brightness(30%);
        overflow: 0;
        };
`;
const StyledWellcomeText = styled.div`
    h1{
        color: green;
        text-align: center;
        font-size: 40px;
    }
    h2{
        color: green;
        text-align: center;
    }
`;

export default Prev;