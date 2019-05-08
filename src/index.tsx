import React from "react";
import ReactDOM from "react-dom";
import {MyComponent} from "./MyComponent";
import {FieldGroup, Button, RadioButton, Text} from "@kintone/kintone-ui-component/lib/js/components-react";
import "@kintone/kintone-ui-component/lib/style";
import {Provider, Subscribe, Container} from 'unstated';

interface State {
    numOfClicks: number;
};

class AppContainer extends Container<State> {
    state = {
        numOfClicks: 0
    };

    increment() {
        console.log(this.state.numOfClicks);
        const numOfClicks = this.state.numOfClicks + 1;
        this.setState({numOfClicks});
    }
}

const items = [{
    label: "item-1",
    value: "1"
}];

function App() {
    return (
        <Subscribe to={[AppContainer]}>
            {(container: AppContainer) => (
                <div>
                <FieldGroup toggle="expand">
                    <Button 
                        text="Click ME" 
                        type="submit"
                        onClick={() => container.increment()}
                    />
                    <RadioButton 
                        name="RadioButton"
                        items={items}
                        value="1"
                    />
                    <Text value={container.state.numOfClicks}/>
                </FieldGroup>
                <MyComponent class="mycomponent">
                    <span>hello!</span>
                    <span>hello!</span>
                </MyComponent>
            </div>
            )}
        </Subscribe>
    )
}
const app = document.getElementById("app");

ReactDOM.render(
    <Provider>
        <App />
    </Provider>
    , 
    app
);