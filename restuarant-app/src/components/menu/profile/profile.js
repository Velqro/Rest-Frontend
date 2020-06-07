import React, { useEffect, useContext } from 'react';
import NavBar from '../../navbar';
import styled from 'styled-components';
import { FoodieContext } from '../../../contexts/foodiecontext';
import axiosWithAuth from '../../../components/axiosWithAuth';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Profile = () => {
    const {user} = useContext(FoodieContext);

    return (
        <Background>
            <NavBar />
            <Contain>
                <H1>Hello <strong>{user.name}!</strong></H1>
                <p>Username: <strong>{user.username}</strong></p>
                <p>Email: <strong>{user.email}</strong></p>
                <p>City: <strong>{user.city}</strong></p>
            </Contain>
        </Background>
    );
};

export default Profile

const Background = styled.div`
    background-color: #ECE6DC;
    height: 100vh;
`;
const H1 = styled.h1`
    text-align: center;
    margin: 15px;
`;
const Contain = styled.div`
    width: 80%;
    padding-left: 10%;
`;