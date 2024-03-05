import { useEffect, useState } from "react";

const AsyncComponent = () => {
    const [resultList, setResultList] = useState<number[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setResultList([1, 2, 3]);
        }, 1000);
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
