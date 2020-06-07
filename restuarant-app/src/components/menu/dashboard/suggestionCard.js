import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const SuggestionCard = (props) => {
    const { id, name, city, address, addToPassport, imgArry } = props;

    return (
        <CardStyled>
          <CardH2>{name}</CardH2>
          <CardH4>{city}</CardH4>
          <CardH4>{address}</CardH4>
            {imgArry.length > 0 ? (
              <Img width="100%" src={imgArry[id].urls.thumb} alt="restaurant picture" />
            ) : null}
          <ButtonCont>
            <Link to={`/restaurant/${id}`}>
            <ButtonLink>View More Details</ButtonLink></Link>
            <ButtonStyled onClick={addToPassport}>Add to passport</ButtonStyled>
          </ButtonCont>
        </CardStyled>
    );
};

export default SuggestionCard;

const Img = styled.img`
  max-height: 15vh;
  max-width: 100%;
`;
const ButtonLink = styled.button`
  width: 100%;
  border-radius: 15px;
  color: white;
  background-color: #3942f7;
  height: 60px;
  border: 3px solid #3942f7
  &:hover{
    background-color: #3942f7;
    border: 3px solid #3942f7;
    color: #3942f7;
    }
`;
const ButtonCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 25px auto;
`;
const ButtonStyled = styled.button`
  width: 40%;
  border-radius: 15px;
  color: white;
  background-color: #3942f7;
  height: 60px;
  border: 3px solid #3942f7
  &:hover{
   background-color: #3942f7;
   border: 3px solid #3942f7;
   color: #3942f7;
   }
`;
const CardStyled = styled.div`
  width: 46%;
  background-color: #E5E5E5;
  border: 2px solid #3942f7;
  border-radius: 15px;
  margin: 20px 2%;
  @media(max-width: 400px) {
    width: 85%;
    margin: 10px 1.5% 0 1.5%;
  }
`;
const CardH2 = styled.h2`
  text-align: center;
  margin-top: 10px;
`;
const CardH4 = styled.h4`
  text-align: center;
`;

