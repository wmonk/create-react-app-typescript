import * as ReactDOM from 'react-dom';
import { MyComponent } from './MyComponent/index';

ReactDOM.render(
    <MyComponent title="Hello World!" />,
    document.getElementById('root') as HTMLElement
);
