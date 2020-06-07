import React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
import styled from 'styled-components';
import NavBar from '../navbar';
const Settings = () => {

    return(
        <div>
            <NavBar />
            <Background>
            <FormContainer>
                <Form>
                    <FormGroup>
                        <H1>Notifications</H1>
                        <div>
                            <CustomInput type="switch" 
                                id="deals" 
                                name="deals" 
                                label="New Deals" />
                            <CustomInput type="switch" 
                                id="friendViewed" 
                                name="friendViewed" 
                                label="Friend viewed your list" />
                            <CustomInput type="switch" 
                                id="friendVisits" 
                                name="friendVisits" 
                                label="Friend visited a Restaurant on your list" />
                            <CustomInput type="switch" 
                                id="friendAdds" 
                                name="friendAdds" 
                                label="Friend Adds a Restaurant To Their Passport" />
                            <CustomInput type="switch" 
                                id="newRestaurant" 
                                name="newRestaurant" 
                                label="New Restaurant In Your Area" />
                        </div>
                    </FormGroup>
                </Form>
            </FormContainer> 
            </Background>
      </div>
    )

}

export default Settings;

const Background = styled.div`
    background-color: #fff;
    height: 100vh;
`;
const FormContainer = styled.div`
    width: 60%;
    margin: 0 auto;
`;
const H1 = styled.h1`
    text-align: center;
    padding: 15px;
`;