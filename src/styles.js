import styled from "styled-components";

export const DefaultLayout = styled.div`
  min-height: 50vh;
  //display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;