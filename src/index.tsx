import React from "react";
import ReactDOM from "react-dom";
import {MyComponent} from "./MyComponent";
import {FieldGroup, Button, RadioButton, Text} from "@kintone/kintone-ui-component/lib/js/components-react";
import "@kintone/kintone-ui-component/lib/style";
import {Provider, Subscribe, Container} from 'unstated';

interface State {
    numOfClicks: number;
    toggle: string;
};

class AppContainer extends Container<State> {
    state = {
        numOfClicks: 0,
        toggle: "expand",
    };

    increment() {
        const numOfClicks = this.state.numOfClicks + 1;
        this.setState({numOfClicks});
    }

    toggleFieldGroup() {
        const isExpand = this.state.toggle === "expand";
        const toggle = isExpand ? "collapse" : "expand";
        this.setState({toggle});
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
                <FieldGroup 
                    toggle={container.state.toggle}
                    onToggle={() => container.toggleFieldGroup()}
                >
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