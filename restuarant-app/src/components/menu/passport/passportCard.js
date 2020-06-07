import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import axiosWithAuth from '../../axiosWithAuth';
import { useHistory } from 'react-router-dom';


const PassportCard = (props) => {
    const { id, name, city, address } = props;
    const history = useHistory();

    const editPassport = ({id}) => {
        history.pushState(`editpassport/${id}`)
    }

    const deletePassport = ({id}) => {
        axiosWithAuth()
            .delete(`/passports/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err)) 
    }

    return (
        
            <CardStyled>
                <CardH2>{name}</CardH2>
                <CardH4>{city}</CardH4>
                <CardH4>{address}</CardH4>
                <Link to={`/restaurant/${id}`}>
                  <img width="100%" src="" alt="restaurant picture" />
                </Link>
                <ButtonCont>
                    <ButtonStyled onClick={()=>{editPassport({id})}}>Edit</ButtonStyled>
                    <ButtonStyled onClick={()=>{deletePassport({id})}}>Delete</ButtonStyled>
                </ButtonCont>
            </CardStyled>
        
      
    );
};

export default PassportCard;

const ButtonLink = styled.button`
  width: 100%;
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
  width: 40%;
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
