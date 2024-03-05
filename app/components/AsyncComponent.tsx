import { useEffect, useState } from "react";

const AsyncComponent = () => {
    const [resultList, setResultList] = useState([]);

    useEffect(() => {}, []);

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
                        return <li>{listItem}</li>;
                    })}
                </ul>
            </div>
        );
    }
};

export default AsyncComponent;
