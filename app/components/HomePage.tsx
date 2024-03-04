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
            <p>Test val: {test ? "True" : "False"}</p>
            <button onClick={clickHandler}>Change test</button>
        </div>
    );
};

export default HomePage;
