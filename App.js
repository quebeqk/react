import React from "react";
import ReactDOM from "react-dom/client";
const title =(
    <h1 className="head" tabIndex="5">
        React using JSX🛰️
    </h1>
);
const Title =() =>(
    <h1 className="head" tabIndex="5">
        React using JSX🛰️
    </h1>
);

const HeadingComponent =() => (
    <div id="container">
        <Title />
        <h1 className="heading">React functional Componet</h1>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
const root1=ReactDOM.createRoot(document.getElementById("root1"));

root.render(<HeadingComponent />);
root1.render(title)