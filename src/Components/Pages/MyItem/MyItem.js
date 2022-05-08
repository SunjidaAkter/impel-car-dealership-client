import React from 'react';

const MyItem = ({ myItems, deleteHandler }) => {
    const { name, img, price, _id, supplierName, quantity, model, color, vehicleStatus } =
        myItems;
    return (
        <div>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{price}</p>
            <p>{supplierName}</p>
            <p>{quantity}</p>
            <p>{model}</p>
            <p>{color}</p>
            <p>{vehicleStatus}</p>
            <button onClick={() => deleteHandler(_id)} className="btn btn-danger">
                Cancel
            </button>
        </div>
    );
};

export default MyItem;