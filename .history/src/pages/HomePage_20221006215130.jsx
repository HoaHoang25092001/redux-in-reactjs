import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addNewHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList';

const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000)
}
function HomePage(props) {
    // strict comparison ===
    // shallow comparison
    const hobbyList = useSelector(state => state.hobby.list)
    const activeId = useSelector(state => state.hobby.activeId)

    // const hobbyState =  useSelector(state => ({
    //     list: state.hobby.list,
    //     activeId: state.hobby.activeId,
    // }), shallowEqual)
    const dispatch = useDispatch();

    const handleAddHobbyClick = () => {
        const newId = randomNumber();
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`
        }
        // Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby)
        dispatch(action)
    }

    return (
        <div className='home-page'>
            <h1>Redux-hook HomePage</h1>
            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList 
            hobbyList={hobbyList}
            activeId={activeId}
            />
        </div>
    )
}

export default HomePage;