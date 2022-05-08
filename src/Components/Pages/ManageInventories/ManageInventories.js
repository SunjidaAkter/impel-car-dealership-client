import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItems from '../../../Hooks/useItems';

const ManageInventories = () => {
    const [reload, setReload] = useState(false);
    const [manageItem] = useItems(reload);

    const deleteHandler = (id) => {
        const confirm = window.confirm("are you sure?");
        if (confirm) {
            const url = `http://localhost:5000/myItem/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((result) => {
                    setReload(!reload);
                });
        }
    };
    return (
        <div className='container'>
            <Link to="/add-new-item">
                <button className="manage_inventories_btn px-5 py-3">
                    Add New Item
                </button>
            </Link>
            <div>
                <h2 className="text-center pt-5 pb-2 m-0">Manage all items</h2>
                <div className=" p-4">
                    <Table responsive striped bordered hover variant="light">
                        <thead>
                            <tr className="text-center">
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Supplier Name</th>
                                <th>Sold</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {manageItem.map((item) => (
                                <tr key={item?._id}>
                                    <td>{item?.name}</td>
                                    <td>{item?.price}</td>
                                    <td>{item?.quantity}</td>
                                    <td>{item?.supplierName}</td>
                                    <td>{item?.sold}</td>
                                    <td className="text-center">
                                        <button
                                            onClick={() => deleteHandler(item?._id)}
                                            className="btn btn-danger"
                                        >
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>


        </div>
    );
};

export default ManageInventories;