Simple state management based on the [new React context API](https://reactjs.org/docs/context.html)

# Usage

[Codesandbox available here](https://codesandbox.io/s/5vp6kyr94)

## Installation

_The plugin is currently not available on npm, you have to install it with github_

```shell
$ yarn add mfrachet/reaktion
```

## On the provider side

```javascript
import { Provider } from "reaktion";
import Connectedello from "./hello";

const actions = {
  changeName: (state, name) => ({ ...state, name })
};

const initialState = { name: "Marvin" };

const App = () => (
  <Provider actions={actions} initialState={initialState}>
    <ConnectedHello />
  </Provider>
);
```

## On the component side

```javascript
// ./Hello.js
import { connect } from 'reaktion';
const Hello = ({ name, actions: { changeName } }) => {<button onClick={() => changeName("Thomas")}>Hello {name}</button>;

export default connect(Hello);
```
