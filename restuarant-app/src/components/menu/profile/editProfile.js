import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBar from '../../navbar';

const EditProfile = () => {
    const [input, setInput] = useState({
        username: '', 
        password: '', 
        name: '', 
        email: '', 
        city: ''})
    

    const changeHandler = e => {
        setInput({ ...input, [e.target.name]: e.target.value});
    };

    const submitEffect = e => {
        e.preventDefault();
        if(Input.password.length < 6 || Input.username.length < 6) {
            alert("Username/Password is too short, must be minimum 6 characters.")
        }
        else {
           alert("Your profile has been updated!")
        };
    };

    return (
        <>
            <NavBar />
            <Background>
                <H1>Change your Account Information :</H1>
                <FormContainer>
                    <Form onSubmit={submitEffect}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="Username" onChange={changeHandler} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Password" onChange={changeHandler} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" placeholder="Name" onChange={changeHandler} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="text" name="email" id="email" placeholder="Email" onChange={changeHandler} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input type="text" name="city" id="city" placeholder="City" onChange={changeHandler} />
                        </FormGroup>
                        <BtnContainer>
                            <Button type="submit">Submit</Button>
                        </BtnContainer>
                    </Form>
                </FormContainer>
            </Background>
        </>
    );
};

export default EditProfile;

const H1 = styled.h1`
    text-align: center;
    margin: 15px;
`;

const FormContainer = styled.div`
    width: 60%;
    margin: 0 auto;
`;

const BtnContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px auto;
    text-align: center;
`;
const Background = styled.div`
    background-color: #ECE6DC;
    padding: 25px 0;
`;