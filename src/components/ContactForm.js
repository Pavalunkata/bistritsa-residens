import React from "react";
import {DefaultLayout} from "../styles";

const ConstactForm = () =>{
    return(
        <DefaultLayout>
            <h1>Свържете се с нас:</h1>
            <a href="tel:+359887878800"><h2><span>tel </span>088 78 78 800</h2></a>
            <a href="mailto:bildniko@abv.bg"><h2><span>mail </span>bildniko@abv.bg</h2></a>
        </DefaultLayout>
    )
}

export default ConstactForm;