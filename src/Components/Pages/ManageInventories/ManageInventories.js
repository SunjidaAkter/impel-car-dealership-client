import React, { useState } from 'react';
import useItems from '../../../Hooks/useItems';

const ManageInventories = () => {
    const [reload, setReload] = useState(false);
    const [inventory] = useItems(reload);

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
        <div>

        </div>
    );
};

export default ManageInventories;