import React from "react";
import styled from "styled-components";
import {DefaultLayout} from "../styles";

//importing icons
import shield from "../media/icons/Shield.svg";
import wind from "../media/icons/Tree.svg";
import build from "../media/icons/Qualitatively.svg";
import calm from "../media/icons/Bird.svg";
import view from "../media/icons/View.svg";
import city from "../media/icons/City.svg";
import pet from "../media/icons/Pet.svg";
import family from "../media/icons/Family.svg";

const Advantages = () =>{
    return(
        <DefaultLayout>
            <Cards className="advantages">
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
                <Card>
                    <div className="icon">
                        <img src={pet} alt="icon of shield"/>
                        <h3>Подходящ за отглеждане на домашни любимци</h3>
                    </div>
                    <p>Само на 10 минути от Околовръстен път</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={family} alt="icon of shield"/>
                        <h3>Подходящ за отглеждане на деца</h3>
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
    //display: flex;
    align-items: center;
    img{
        height: 100px;
        font-style: bold;
        //font-size:1px;
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