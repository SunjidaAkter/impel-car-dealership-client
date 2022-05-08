import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import './singleItem.css'

const SingleItem = () => {
    const { id } = useParams();
    const [reload, setReload] = useState(false);
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://powerful-island-01636.herokuapp.com/item/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setItem(data));
    }, [id, reload]);

    const InputHandler = (e) => {
        e.preventDefault();
        const number = parseInt(e.target.number.value);
        let quantity = parseInt(item.quantity) + number;
        const url = `https://powerful-island-01636.herokuapp.com/item/${id}`;
        fetch(url, {
            method: "PUT",
            body: JSON.stringify({ quantity }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setReload(!reload);
                e.target.reset();
            });
    };

    const deliveryHandler = (quantity) => {
        if (quantity > 1) {
            let quantityMinus = quantity - 1;

            const url = `https://powerful-island-01636.herokuapp.com/item/${id}`;
            fetch(url, {
                method: "PUT",
                body: JSON.stringify({ quantity: quantityMinus }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    setReload(!reload);
                });
        }
    };


    return (

        <div className="bg  ">
            <div className="container single-container single-font">
                <h1 className="font mt-5">Increase the quantity of the Items</h1>
                <Form className="mt-5 d-flex " onSubmit={InputHandler}>
                    <Form.Group className="mb-3 mt-1 w-75 " controlId="formBasicEmail">
                        <Form.Control className="py-2" type="number" placeholder="Enter Quantity Number" name="number" />
                    </Form.Group>
                    <button className='d-block w-25 butttn ' type="submit">
                        Submit
                    </button>
                </Form>
                <div className=' single-item'>
                    <div className="single-item-container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center">
                            <img className='w-75  rounded ' src={item?.img} alt="" />
                        </div>
                        <div className="px-5">
                            <h2 className="text font ms-4 pt-2">{item?.name}</h2>
                            <div className='d-flex justify-content-around align-items-center '>

                                <span className='ms-4 mt-2'>
                                    <span className='text'><b>Model</b></span><br />
                                    <span className='text'><b>Status</b></span><br />
                                    <span className='text'><b>Color</b></span>
                                </span>
                                <span className='ms-4 '>
                                    <span>-</span><br />
                                    <span>-</span><br />
                                    <span>-</span>
                                </span>
                                <span className='ms-4 text'>
                                    <span className=''>{item?.model}</span><br />
                                    <span className=''>{item?.vehicleStatus}</span><br />
                                    <span className=''>{item?.color}</span>
                                </span>

                            </div>
                            <p className="line ms-4 mt-4"><b>Price :</b> ${item?.price}</p>
                            <p className="line ms-4"><b>Quantity :</b> {item?.quantity}</p>
                            <p className="line ms-4"><b>Supplier Name :</b> {item?.supplierName}</p>
                            <p className="line ms-4"><b>Sold :</b> {item?.sold}</p>
                            <button onClick={() => deliveryHandler(item?.quantity)} className=" my-4 btn btn-dark">Delivered</button>
                        </div>
                    </div>
                </div>
            </div>
            <Link style={{ textDecoration: 'none' }} to="/manageInventories">
                <button className=' buttn width d-block mx-auto mb-5'>Manage Item</button>
            </Link>
        </div>
    );
};

export default SingleItem;