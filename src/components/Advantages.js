import React from "react";
import styled from "styled-components";
import {DefaultLayout} from "../styles";

//importing icons
import shield from "../media/iconmonstr-shield-28.svg";
import wind from "../media/iconmonstr-weather-67.svg";
import build from "../media/iconmonstr-construction-34.svg";
import calm from "../media/lotus-1625064-1376582.png"
import view from "../media/view.png"
import city from "../media/park-city-view-landscape-512.webp"

const Advantages = () =>{
    return(
        <DefaultLayout>
            <Cards>
                <Card>
                    <div className="icon">
                        <img src={city} alt="icon for city view"/>
                        <h3>В близoст до града</h3>
                    </div>
                    <p>Само на 10 минути от Околовръстен път</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={calm} alt="lotos icon representing calm"/>
                        <h3>Спокойствие</h3>
                    </div>
                    <p>Само на 10 минути от Околовръстен път</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={wind} alt="icon for good air" />
                        <h3>Чист въздух</h3>
                    </div>
                    <p>Само на 10 минути от Околовръстен път</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={view} alt="icon for view of a mountain"/>
                        <h3>Прекрасни гледки</h3>
                    </div>
                    <p>Само на 10 минути от Околовръстен път</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={build} alt="icon of building house" />
                        <h3>Висококачествено строителство</h3>
                    </div>
                    <p>Само на 10 минути от Околовръстен път</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={shield} alt="icon of shield"/>
                        <h3>Сигурност</h3>
                    </div>
                    <p>Само на 10 минути от Околовръстен път</p>
                </Card>
            </Cards>
        </DefaultLayout>
        
    )
};

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Card = styled.div`
  flex-basis: 20rem;
  margin: 1.5rem;
  .icon {
    display: flex;
    align-items: center;
    img{
        max-width: 40px;
        max-height: 40px;
    }
    h3 {
      margin-left: 1rem;
      color: black;
      padding: 1rem;
      font-size: 2rem;
    }
  }
  p{
      height: 3rem;
      font-size: 1.3rem;
  }
`;

export default Advantages;