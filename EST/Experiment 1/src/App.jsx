import React, { useState, memo } from "react";


const ItemList = memo(({ items }) => {
  console.log("ItemList rendered");

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});

function App() {
  
  const [items] = useState(() =>
    Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`)
  );

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter
      </button>

      <ItemList items={items} />
    </div>
  );
}
export default App;