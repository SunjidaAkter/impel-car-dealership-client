import React from 'react';

const MyItem = ({ myItems, deleteHandler }) => {
    const { name, img, price, _id, supplierName, quantity, model, color, vehicleStatus } =
        myItems;
    return (
        <div>
            <div className=' single-item'>
                <div div className="single-item-container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center">
                        <img className='w-75  rounded ' src={img} alt="" />
                    </div>
                    <div className="px-5">
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
                        <button onClick={() => deleteHandler(_id)} className="d-block ms-0 mb-3 btn btn-danger">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItem;