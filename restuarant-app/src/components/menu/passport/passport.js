import React from 'react';
import NavBar from '../../navbar';
import PassportList from './passportList';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Passport = () => {
    
    return(
        <Background>
        <NavBar />
        <H1>Your Passport</H1>
        
        <PassportList />
        </Background>
    );
};

export default Passport

const Background = styled.div`
    background-color: #fff;
    min-height: 100vh;
`;
const H1 = styled.h1`
    text-align: center;
    margin: 15px;
`;