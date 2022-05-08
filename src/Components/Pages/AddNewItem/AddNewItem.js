import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from "react-toastify";
import { Button, Form } from 'react-bootstrap';

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

        fetch("http://localhost:5000/item", {
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
        <div className='container w-50'>
            <Form onSubmit={submitHandler} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Name" name="name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Enter price" name="price" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Supplier's Name" name="supplierName" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Image URL" name="img" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Enter Sell" name="sold" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Enter Quantity" name="quantity" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Color" name="color" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Model" name="model" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Vehicle Status" name="vehicleStatus" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter email" value={user.email} readOnly name="email" />
                </Form.Group>
                <Button className='d-block w-100' variant="dark" type="submit">
                    Add New
                </Button>
            </Form>
        </div>
    );
};

export default AddNewItem;