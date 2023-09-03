import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { name, phone, email, website,id } = friend
    return (
        <div className='friend-container'>
            <h2>{name}</h2>
            <h4>Phone: {phone} </h4>
            <h4>Email: {email} </h4>
            <h4>Website: {website} </h4>
            <Link to={`/friend/${id}`}>Show Deteils</Link>
        </div>
    );
};

export default Friend;