import React from "react";
import {DefaultLayout} from "../styles";
import styled from "styled-components";


const Galery = ({pictures}) =>{
    return(
        <DefaultLayout>
            <Pictures>
                {pictures.map((picture)=>
                    <Picture src={picture.src} alt={picture.alt} key={picture.id} />
                )}
            </Pictures>
        </DefaultLayout>
    )
}

const Pictures = styled.div`
    justify-content: space-between;
`;
const Picture = styled.img`
    max-height: 15vh;
    margin: 5px;
    :hover{
        transition: transform .5s;
        transform: scale(1.2);
        cursor: pointer;
    }
    
`;

export default Galery;