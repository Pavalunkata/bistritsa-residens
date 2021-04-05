import styled from "styled-components";

export const DefaultLayout = styled.div`
  min-height: 50vh;
  //display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  text-align: center;
  h1{
    font-size: 2rem;
    margin: 2rem;
    font-weight: bold;
  };
  h2{
    font-size: 2rem;
    margin: 2rem;
    font-weight: bold;
  };
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`; 