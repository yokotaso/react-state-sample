import React from "react";

interface Props {
    class: string;
    children: React.ReactNode;
}

export function MyComponent(props: Props) {
    return (
        <div className={props.class}>{props.children}</div>
    )
}