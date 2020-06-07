import React, { useContext, useState, useEffect } from 'react';
import { FoodieContext } from '../../../contexts/foodiecontext';
import styled from 'styled-components';
import NavBar from '../../navbar.js';
import SuggestionList from './suggestionList';
import Axios from 'axios';


const Dashboard = () => {
    const { user } = useContext(FoodieContext);
    const [imgArry, setImgArry] = useState([])

    useEffect(() => {
        Axios
          .get('https://api.unsplash.com/photos/random?query=restaurant&count=30&client_id=13a19d8fa399e3637a904808fb4a6117734f8b057811badb42583dfa4c60e3fb')
          .then(res => {
            console.log('this is the unsplash api', res)
            setImgArry(res.data);
          })
          .catch(err => {
            console.log('did not recieve data from unsplashed', err)
          })
      },[]);
    
    return(
        <Background>
         <NavBar />
         <H1>Hello {user.name}</H1>
         <H2>Below is a list of our recommened Restaurants:</H2>
         <div>
            <SuggestionList imgArry={imgArry}/>
         </div>
        </Background>
    );
};

export default Dashboard;


const Background = styled.div`
    background-color: #fff;
`;

const H1 = styled.h1`
    text-align: center;
    margin: 15px;
`;

const H2 = styled.h2`
    text-align: center;
    margin: 15px 0;
    padding: 25px 0;
    background-color: #5158e8;
    color: #F6EFE5;
`;