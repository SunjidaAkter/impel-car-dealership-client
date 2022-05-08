import { useEffect, useState } from "react";

const useItems = (reload) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://powerful-island-01636.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [reload]);
    return [items, setItems]
}

export default useItems;