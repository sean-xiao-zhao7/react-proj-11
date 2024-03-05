import { useEffect, useState } from "react";

const AsyncComponent = () => {
    const [resultList, setResultList] = useState([]);

    useEffect(() => {}, []);

    return (
        <div>
            {resultList.map((listItem) => {
                return <div>{listItem}</div>;
            })}
        </div>
    );
};
