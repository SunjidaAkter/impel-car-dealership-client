import { useEffect, useState } from "react";

const useItems = (reload) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [reload]);
    return [items, setItems]
}

export default useItems;