import React from 'react';
import './Team.css'

const Team = ({ team }) => {
    const { name, img, phone, email, status } = team;
    return (

        <div className='container team-container w-75 my-3'>
            <img className="w-100" src={img} alt="" />
            <div className='team-text text-dark'>
                <h2 className='bold'>{name}</h2>
                <h5 className='bold'>{status}</h5>
                <p><span className='bold'>Email : </span>{email}</p>
                <p><span className='bold'>Phone : </span>{phone}</p>
            </div>
        </div>
    );
};

export default Team;