import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';

const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000)
}
function HomePage(props) {

    const hobbyList = useSelector(state => state.hobby.list)
    const dispatch = useDispatch();

    const handleAddHobbyClick = () => {
        const newId = randomNumber();
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`
        }
    }
    return (
        <div className='home-page'>
        <h1>Redux-hook HomePage</h1>
        <button onClick={handleAddHobbyClick}>Random hobby</button>
        <HobbyList hobbyList={hobbyList}></HobbyList>
        </div>
    )
}

export default HomePage;