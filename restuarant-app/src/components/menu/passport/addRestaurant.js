import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const AddRestaurant = () => {
    

    return(
        <Background>
            <ButtonCont>
                <LinkStyled to='/newRestaurant'>
                    <Button color="secondary">Add a New Restaurant</Button>{' '}
                </LinkStyled>
            </ButtonCont>
        </Background>
    );
};

export default AddRestaurant;

const Background = styled.div`
    background-color: #fff;
`;

const LinkStyled = styled(Link)`
    text-align: center;
`;

const ButtonCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 25px auto;
`;