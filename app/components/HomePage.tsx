import { useState } from "react";

const HomePage = () => {
    const [test, setTest] = useState(false);

    const clickHandler = () => {
        setTest((currentVal) => {
            return !currentVal;
        });
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={clickHandler}></button>
        </div>
    );
};

export default HomePage;
