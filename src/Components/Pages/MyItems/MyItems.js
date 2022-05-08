import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { signOut } from 'firebase/auth';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const navigate = useNavigate();
    const [reload, setReload] = useState(false);
    const [myItems, setMyItems] = useState([]);
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        const url = ` https://powerful-island-01636.herokuapp.com/myItem?email=${user?.email}`;
        const myItems = async () => {
            if (loading) {
                return <Loading />;
            }

            try {
                const { data } = await axios(url, {
                    headers: {
                        authorization: `${localStorage.getItem("accessToken")}`,
                    },
                });
                setMyItems(data);
            } catch (error) {
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth);
                    navigate("/signIn");
                }
            }
        };
        myItems();
    }, [user, reload]);


    const deleteHandler = (id) => {
        const confirm = window.confirm("are you sure?");
        if (confirm) {
            const url = `https://powerful-island-01636.herokuapp.com/myItem/${id}`;
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
        <div className='container bg'>
            <h1 className='font mt-4'>Your Car</h1>
            <div className="row row-cols-md-2 ">
                {myItems?.map((myItem) => (
                    <MyItem
                        myItems={myItem}
                        deleteHandler={deleteHandler}
                        key={myItem?._id}
                    />
                ))}
            </div>


        </div>
    );
};

export default MyItems;