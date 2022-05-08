import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { quantity, supplierName, _id, name, vehicleStatus, img, model, color, price } = item;
    return (
        <div className='container  my-5 item'>
            <img className='w-100 rounded ' src={img} alt="" />
            <div className="">
                <h2 className="text font pt-2">{name}</h2>
                <div className='d-flex justify-content-around align-items-center '>

                    <span className='mt-2'>
                        <span className='text'><b>Model</b></span><br />
                        <span className='text'><b>Status</b></span><br />
                        <span className='text'><b>Color</b></span>
                    </span>
                    <span className=''>
                        <span>-</span><br />
                        <span>-</span><br />
                        <span>-</span>
                    </span>
                    <span className='text'>
                        <span className=''>{model}</span><br />
                        <span className=''>{vehicleStatus}</span><br />
                        <span className=''>{color}</span>
                    </span>

                </div>
                <p className="line  mt-4"><b>Price :</b> ${price}</p>
                <p className="line "><b>Quantity :</b> {quantity}</p>
                <p className="line "><b>Supplier Name :</b> {supplierName}</p>
            </div>


            <Link style={{ textDecoration: 'none' }} to={`/item/${_id}`}>
                <button className='buttn font'>Stock Update</button>
            </Link>
        </div>
    );
};

export default Item;