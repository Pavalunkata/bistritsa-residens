import React from "react";
import styled from "styled-components";


//Importing midia
import viz_0 from "../media/viz_0.JPG"

const Prev = () =>{
    return(
        <div>
            <StyledBackgraound>
                <img src={viz_0} alt="backgraound vue of area" />
                <h1>Bisritsa Residence</h1>
                <h2>Спокойствието на 5 мин от града</h2>
            </StyledBackgraound>
        </div>
    )
}

const StyledBackgraound = styled.div`
    margin: 0;
    padding: 0;
    overflow: 0;
    min-height: 90vh;
    h1{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 5rem;
        padding:0;
        background: none;
        
    }
    h2{
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        background: none;
        font-size: 3rem;
        text-align: center;
    }
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

export default Prev;