import React from "react";
import ReactDOM from "react-dom";
import {MyComponent} from "./MyComponent";

const app = document.getElementById("app");
ReactDOM.render(
    <div>
        <MyComponent class="mycomponent">
            <span>hello!</span>
            <span>hello!</span>
        </MyComponent>
    </div>, 
    app
);