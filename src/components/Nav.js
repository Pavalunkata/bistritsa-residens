import React from "react";
import styled from "styled-components";
import {Link} from "react-scroll"

const Nav = ()=>{
    return(
        <StyledNav>
            <ul>
                <li>
                    <Logo>
                        <h1>Начало</h1>
                    </Logo>
                </li>
                <li>
                <Link activeClass="active" className="advantages" to="advantages" spy={true} smooth={true} duration={500}>
                    Предимства
                </Link>
                </li>
                <li>
                    Галерия
                </li>
                <li>
                    Местоположение
                </li>
                <li>
                    Контакти
                </li>
            </ul>
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
  //background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  //color: white;
  ul {
    display: flex;
    list-style: none;
    background: none;
    hover{
        cursor: pointer;
    }
  }
  li {
    padding-left: 10rem;
    position: relative;
    background: none;
    hover{
        cursor: pointer;
    }
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
`;
const Logo = styled.div`
    background: none;
   h1{
        background: none;
        font-weight: bold;
    }
    :hover{
        cursor: pointer;
    }
`;

export default Nav;