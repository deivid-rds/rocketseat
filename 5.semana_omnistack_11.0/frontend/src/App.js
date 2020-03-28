import React, { useState } from 'react';

import Header from './Header';

// JSX (Java Script XML) = Quando temos HTML numa página .js

function App() {
  const [counter, setCounter] = useState(0);

  // useState retorna array com 2 posições: Array [valor, funcaoDeAtualização]

  function increment(){
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;