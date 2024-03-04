import { useState } from "react";
import ChildPage1 from "./children/ChildPage1";

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
            <p>Test val: {test ? <ChildPage1 /> : null}</p>
            <button onClick={clickHandler}>Change test</button>
        </div>
    );
};

export default HomePage;
