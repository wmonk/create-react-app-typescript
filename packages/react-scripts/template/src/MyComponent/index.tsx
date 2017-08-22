import * as React from 'react';

export interface MyComponentProps {
    title: string;
}

export interface MyComponentState {

}

export class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
    render() {
        return (
            <div>{this.props.title}</div>
        );
    }
}
