import React from "react";
import styled from "styled-components";
import { DefaultLayout } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaQ = () => {
  const [element, controls] = useScroll();
  return (
    <DefaultLayout
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <FaqLayout>
      <h2>
        Често задавани въпрси
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Какво е отоплението?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              autem accusamus ex laboriosam porro, adipisci quam voluptatum
              magnam placeat corporis.
            </p>
          </div>
        </Toggle>
        <Toggle title="Кога ще бъде готов проекта?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
              totam.
            </p>
          </div>
        </Toggle>
        <Toggle title="Каква е схемата на плащане?">
          <div className="answer">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, neque.
            </p>
          </div>
        </Toggle>
        <Toggle title="Паркоместата закрити ли са?">
          <div className="answer">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, neque.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      </FaqLayout>
    </DefaultLayout>
  );
};

const FaqLayout = styled.div`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaQ;
