"use client";

import { useState } from "react";
import ChildPage1 from "./children/ChildPage1";
import AsyncComponent from "./AsyncComponent";

const HomePage = () => {
    const [test, setTest] = useState(false);

    const clickHandler = () => {
        setTest((currentVal) => {
            return !currentVal;
        });
    };

    return (
        <main>
            <h1>Home Page</h1>
            <div>Test val: {test ? <ChildPage1 /> : null}</div>
            <button onClick={clickHandler}>Change test</button>
            <AsyncComponent />
        </main>
    );
};

export default HomePage;
