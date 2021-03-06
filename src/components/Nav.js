import React from "react";
import styled from "styled-components";
import homeIcon from "../media/iconmonstr-home-4.svg"

const Nav = ()=>{
    return(
        <StyledNav>
            <Logo>
                <img src={homeIcon} alt="logo" />
            </Logo>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
  min-height: 5vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
`;
const Logo = styled.div`
    :hover{
        cursor: pointer;
    }
`;

export default Nav;