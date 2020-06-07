import React, { useState, useContext } from 'react';
import axiosWithAuth from '../axiosWithAuth';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { FoodieContext } from '../../contexts/foodiecontext';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const {user, setUser} = useContext(FoodieContext)
    const [userInput, setUserInput] = useState({username: '', password: '', name: '', email: '', city: ''})
    const history = useHistory()

    const handleChanges = e => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value});
    };

    const onSubmit = e => {
        e.preventDefault();
        if(userInput.password.length < 6 || userInput.username.length < 6) {
            alert("Username/Password is too short, must be minimum 6 characters.")
        }
        else {
            axiosWithAuth()
            .post('/api/auth/register', userInput)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', JSON.stringify(res.data.username))
                setUser(JSON.parse(localStorage.getItem('user')))
                history.push('/')
            })
            .catch(err => console.error(err))
            }
        }

    return (
        <Background>
            <FormContainer>
                <H1>Register your new account:</H1>
                <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="Username" onChange={handleChanges} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Password" onChange={handleChanges} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Name" onChange={handleChanges} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" id="email" placeholder="Email" onChange={handleChanges} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="text" name="city" id="city" placeholder="City" onChange={handleChanges} />
                    </FormGroup>
                    <BtnContainer>
                        <Button type="submit">Sign Up</Button>
                        <Link to ='/'>Returning User? Sign in</Link>
                    </BtnContainer>
                </Form>
            </FormContainer>
        </Background>
    )
}

export default Register;

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