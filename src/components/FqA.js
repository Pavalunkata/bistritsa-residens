import React from "react";
import styled from "styled-components"
//import {StyledLayout} from "../style"
import {DefaultLayout} from "../styles";

const FqA = () =>{
    return(
        <DefaultLayout>
            <h2> Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How do you start</h4>
            </div>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sequi.</p>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>Daily Schedule</h4>
            </div>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, dolorum?</p>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>Diferrent Payment Methods</h4>
            </div>
            <div className="answear">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, voluptates!</p>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>What Products do you offer?</h4>
            </div>
            <div className="answear">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, repudiandae.</p>
            </div>
        </DefaultLayout>
    )
}

// const StyledFaq = styled(StyledLayout)`
//   display: block;
//   span {
//     display: block;
//   }
//   h2 {
//     padding-bottom: 2rem;
//     font-weight: lighter;
//   }
//   .faq-line {
//     background: #cccccc;
//     height: 0.2rem;
//     margin: 2rem 0rem;
//     width: 100%;
//   }
//   .question {
//     padding: 3rem 0rem;
//     cursor: pointer;
//   }
//   .answer {
//     padding: 2rem 0rem;
//     p {
//       padding: 1rem 0rem;
//     }
//   }
// `;

export default FqA;