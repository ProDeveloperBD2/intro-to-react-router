import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './FriendsDeteils.css'

const FriendsDeteils = () => {
    const friendsdId = useLoaderData();
    console.log(friendsdId)
    const navigate = useNavigate();
    const goBackHandler = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>Everything about this person is here</h1>
            <div className='friendDeteil'>
                <h2>{friendsdId.name}</h2>
                <h4>ID: {friendsdId.id}</h4>
                <h3>COMPANY NAME: {friendsdId.company.name}</h3>
                <h3>USERNAME: {friendsdId.username}</h3>
                <button onClick={goBackHandler}>Go Back</button>
            </div>
        </div>
    );
};

export default FriendsDeteils;