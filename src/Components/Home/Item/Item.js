import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { _id, name, vehicleStatus, img, model, color, price } = item;
    return (
        <div className='container  my-5 item'>
            <img className='w-100 rounded ' src={img} alt="" />
            <h5>{name}</h5>
            <div className='d-flex justify-content-around'>
                <div>
                    <p className='text'>Model</p>
                    <p className='text'>Status</p>
                    <p className='text'>Color</p>
                </div>
                <div>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                </div>
                <div className='text'>
                    <p className=''>{model}</p>
                    <p className=''>{vehicleStatus}</p>
                    <p className=''>{color}</p>
                </div>
            </div>
            <h5>${price}</h5>
            <Link style={{ textDecoration: 'none' }} to={`/item/${_id}`}>
                <button className='buttn font'>Stock Update</button>
            </Link>
        </div>
    );
};

export default Item;