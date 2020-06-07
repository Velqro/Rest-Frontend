import React, { useContext, useEffect} from 'react';
import SuggestionCard from './suggestionCard';
import styled from 'styled-components';
import { FoodieContext } from '../../../contexts/foodiecontext';
import axiosWithAuth from '../../../components/axiosWithAuth';
import { Spinner, Container, Row, Col } from 'reactstrap';

const SuggestionList = ({imgArry}) => {
    const {restaurants, setRestaurants} = useContext(FoodieContext);
    const {passport, setPassport} = useContext(FoodieContext);

    const addToPassport = restaurant => {
        setPassport(...passport, restaurant)
    }

    useEffect(() => {
        const getRestaurants = () => {
            axiosWithAuth()
                .get('/api/restaurants')
                .then(res => {
                    console.log(res)
                    setRestaurants(res.data)
                })
                .catch(err => console.log(err))
        }
        getRestaurants();
    }, []);

    return(
        <CardContainer>
        {restaurants.map(restaurant =>(
            <SuggestionCard
            id={restaurant.id}
            name={restaurant.name}
            city={restaurant.city}
            address={restaurant.address}
            addToPassport={addToPassport}
            imgArry={imgArry}
            />
            ))}
        </CardContainer>
    );
};

export default SuggestionList;

const CardContainer = styled.div`
    box-sizing: border-box;
    width: 60%;
    margin: 20px auto;
    background-color: #c5c6c9;
    border-radius: 15px;
    display: flex;
    border: 2px solid #3942f7;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    @media(max-width: 400px){
        width: 100%;
        border-radius: 0;
        border: none;
        
        
    }
`;