import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from "react-toastify";
import { Button, Form } from 'react-bootstrap';
import './AddNewItem.css'

const AddNewItem = () => {
    let [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading ></Loading>;
    }
    const submitHandler = (event) => {
        console.log();
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const price = event.target.price.value;
        const supplierName = event.target.supplierName.value;
        const img = event.target.img.value;
        const sold = event.target.sold.value;
        const quantity = event.target.quantity.value;
        const model = event.target.model.value;
        const color = event.target.color.value;
        const vehicleStatus = event.target.vehicleStatus.value;
        const myItem = {
            name,
            price,
            supplierName,
            img,
            sold,
            model,
            color,
            vehicleStatus,
            email,
            quantity,
        };

        fetch("https://powerful-island-01636.herokuapp.com/item", {
            method: "POST",
            body: JSON.stringify(myItem),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.acknowledged) {
                    toast("The product has been added correctly!");
                    event.target.reset();
                }
            });
    };

    return (
        <div className='container my-5 w-50'>
            <h1 className='font my-3'>ADD NEW ITEM</h1>
            <Form onSubmit={submitHandler} >
                <div className='my-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <p className='text'>Email address</p>
                        <Form.Control type="text" placeholder="Enter email" value={user.email} readOnly name="email" />
                    </Form.Group>
                </div>
                <div className='two-container'>
                    <div className=''>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <p className='text'>Title</p>
                            <Form.Control type="text" placeholder="Enter Product Name" name="name" required />
                        </Form.Group>
                    </div>
                    <div className=''>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <p className='text'>Image URL</p>
                            <Form.Control type="text" placeholder="Enter Image URL" name="img" required />
                        </Form.Group>
                    </div>
                </div>
                <div className='two-container'>
                    <div className=''>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <p className='text'>Price</p>
                            <Form.Control type="number" placeholder="Enter price" name="price" required />
                        </Form.Group>
                    </div>
                    <div className=''>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <p className='text'>Sell</p>
                            <Form.Control type="number" placeholder="Enter Sell" name="sold" required />
                        </Form.Group>
                    </div>
                </div>
                <div className='two-container'>
                    <div className=''>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <p className='text'>Supplier Name</p>
                            <Form.Control type="text" placeholder="Enter Supplier's Name" name="supplierName" required />
                        </Form.Group>
                    </div>
                    <div className=''>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <p className='text'>Quantity</p>
                            <Form.Control type="number" placeholder="Enter Quantity" name="quantity" required />
                        </Form.Group>
                    </div>
                </div>
                <h3 className='mt-4 mb-3 font text'>DESCRIPTION</h3>
                <div className='add-container mb-5'>
                    <div className=''>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <p className='text'>Color</p>
                            <Form.Control type="text" placeholder="Enter Color" name="color" required />
                        </Form.Group>
                    </div>
                    <div className=''>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <p className='text'>Model</p>
                            <Form.Control type="text" placeholder="Enter Model" name="model" required />
                        </Form.Group>
                    </div>
                    <div className=''>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <p className='text'>Vehicle Status</p>
                            <Form.Control type="text" placeholder="Enter Vehicle Status" name="vehicleStatus" required />
                        </Form.Group>
                    </div>
                </div>

                <Button className='d-block w-100' variant="dark" type="submit">
                    Add New
                </Button>
            </Form>
        </div>
    );
};

export default AddNewItem;