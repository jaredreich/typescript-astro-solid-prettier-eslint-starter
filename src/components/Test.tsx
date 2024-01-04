import { createSignal } from 'solid-js';

import './Test.css';

console.log('test');

const [count, setCount] = createSignal(0);
export default function Counter() {
  return (
    <>
      <h1>TestComponent</h1>
    </>
  );
}
