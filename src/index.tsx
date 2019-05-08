import React from "react";
import ReactDOM from "react-dom";
import {MyComponent} from "./MyComponent";
import {FieldGroup, Button, RadioButton, Text} from "@kintone/kintone-ui-component/lib/js/components-react";
import "@kintone/kintone-ui-component/lib/style";

const app = document.getElementById("app");
const items = [{
    label: "item-1",
    value: "1"
}];
ReactDOM.render(
    <div>
        <FieldGroup toggle="expand">
            <Button 
                text="Click ME" 
                type="submit"
            />
            <RadioButton 
                name="RadioButton"
                items={items}
                value="1"
            />
            <Text />
        </FieldGroup>
        <MyComponent class="mycomponent">
            <span>hello!</span>
            <span>hello!</span>
        </MyComponent>
    </div>, 
    app
);