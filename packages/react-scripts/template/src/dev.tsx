import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MyComponent } from './index';

ReactDOM.render(
    <MyComponent title="Hello World!" />,
    document.getElementById('root') as HTMLElement
);
