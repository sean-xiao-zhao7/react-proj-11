import { useEffect, useState } from "react";

const AsyncComponent = () => {
    const [resultList, setResultList] = useState<number[]>([]);

    useEffect(() => {
        fetch("test")
            .then((response) => response.json())
            .then((result) => setResultList(result));
    }, []);

    if (resultList.length <= 0) {
        return (
            <div>
                <h2>No items</h2>
            </div>
        );
    } else {
        return (
            <div>
                <ul>
                    {resultList.map((listItem) => {
                        return <li key={listItem}>{listItem}</li>;
                    })}
                </ul>
            </div>
        );
    }
};

export default AsyncComponent;
