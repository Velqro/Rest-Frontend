import React from 'react';
import NavBar from '../../../navbar';
import styled from 'styled-components';

const Restaurant = (props) => {
    const{ id, name, city, address, addToPassport } = props;
    
    return (
        <Background>
          <NavBar />
          <CardCont>
            <CardStyled>
              <img width="100%" src="" alt="restaurant picture" />
              <CardH2>{name}</CardH2>
              <CardH4>{city}</CardH4>
              <CardH4>{address}</CardH4>
              <ButtonCont>
                <ButtonStyled onClick={addToPassport}>Add to passport</ButtonStyled>
              </ButtonCont>
            </CardStyled>
           </CardCont>
        </Background>
      );
};

export default Restaurant

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
  background-color: #8C2C2C;
  height: 60px;
  border: 3px solid #F6EFE5
  &:hover{
   background-color: #F6EFE5;
   border: 3px solid #8C2C2C;
   color: #8C2C2C;
   }
`;
const CardStyled = styled.div`
  width: 46%;
  background-color: #E5E5E5;
  border: 2px solid #8C2C2C;
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
const Background = styled.div`
    background-color: #ECE6DC;
    height: 100vh;
`;
const CardCont = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap
    width: 95%
    margin: 0 auto;
`
