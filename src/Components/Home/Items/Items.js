import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../../Hooks/useItems';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] = useItems();
    return (
        <div className='bg'>
            <h1 id='items' className='text-center mb-1 mt-5 font'>Items & Pricing</h1>
            <div className='container items-container'>
                {
                    items.map(item => <Item
                        item={item}
                        key={item.id}
                    ></Item>)
                }
            </div>
            <Link style={{ textDecoration: 'none' }} to="/manageInventories">
                <button className=' buttn width d-block mx-auto mb-5'>Manage Item</button>
            </Link>
        </div>
    );
};

export default Items;