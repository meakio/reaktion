[![Build Status](https://travis-ci.org/mfrachet/reaktion.svg?branch=master)](https://travis-ci.org/mfrachet/reaktion)
[![Coverage Status](https://coveralls.io/repos/github/mfrachet/reaktion/badge.svg?branch=master)](https://coveralls.io/github/mfrachet/reaktion?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Use the same API as [useState](https://reactjs.org/docs/hooks-state.html) React hook but for transverse state management :muscle:

# Usage

## Installation

_The module is currently not available on npm, you should install it using github_

```shell
$ yarn add mfrachet/reaktion
```

## In your code

```javascript
import { Reaktion, useStore } from "./reaktion/src/index";

const Hello = () => {
  /**
   * The first element is the state node
   * The second element is a function that mutates only that node
   **/
  const [name, setName] = useStore("name");

  return <button onClick={() => setName("Marvin")}>Hello {name}</button>;
};

/**
 * Initial transverse node
 **/
const initialState = { name: "World" };

const App = () => {
  /**
   * Reaktion is the state provider. It must be placed at a top level of your app
   **/
  return (
    <Reaktion initialState={initialState}>
      <Hello />
    </Reaktion>
  );
};
```
